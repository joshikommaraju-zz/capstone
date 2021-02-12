import React,{ Component } from 'react';
import { Storage } from 'aws-amplify';
import DocumentPicker from 'react-native-document-picker';
import {
  View,
  Text,
  render,
  Image,
  TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob';
import * as Progress from 'react-native-progress';
import { YellowBox } from 'react-native';
import { set } from 'react-native-reanimated';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);



class Subject extends Component{
  constructor(props) {
    super(props);
    this.state={
      DBdata: {},
      assArray: [],
      sessions:[{day:"M", time: "9 AM"},{day:"F", time: "2 PM"},{day:"S", time: "9 AM"}],
      notice: "",
      attendance: "",
      subjectName: "",
      subjectCode: "",
      subjectNotice:"",
      assignmentDateDue: "",
      slots: {},
      assignmentName:"",
      uplname: "",
      username: "",
      quizzName: "",
      quizzJSON:{},
      keyVal: null,
      exaArray:[],
      assignmentNotice: "",
    };
  }

  async componentDidMount(){
    //let data = await AsyncStorage.getItem(key);
    // this.setState({data: data});
    console.log("Subject Screen Entered: ",this.state.subjectName)
    let dat = await AsyncStorage.getItem("@DBdata")
    let data = JSON.parse(dat)
    let usNa= this.props.usNa
    let ses = this.props.sessions
    let suNa = this.props.subjectName
    let suCo = this.props.subjectCode
    let keVa = this.props.keVa
    let suNo = data.classSection.subjects.items[keVa].notice
    this.setState({
      DBdata: data,
      keyVal: keVa,
      subjectName: suNa,
      subjectCode: suCo,
      subjectNotice: suNo,
      sessions: ses,
      username: usNa
    })
    console.log("subejct data",this.state.DBdata.classSection.subjects.items[this.state.keyVal].assignment.items[0].marks)
    console.log("key val", this.state.keyVal)
    this.assignmentGetData()
    this.getExamMarks()
    this.examGetData()
    let assignName = this.state.subjectCode+'_'+this.state.assignmentName+'_'+this.state.username;
    this.setState({uplname: assignName})
  }

  //displaying assignment
  async assignmentGetData(){
    let data = this.state.DBdata.classSection.subjects.items[this.state.keyVal].assignment.items
    let ar = []
    for (let index = 0; index < data.length; index++) {
      let r={
        name: data[index].name,
        maxMarks: data[index].marks.items[0].maxMarks,
        marksObt: data[index].marks.items[0].marksObtained,
        date: data[index].dueDate,
        notice: data[index].notice,
      }
      ar.push(r)
    }
    this.setState({assArray: ar})
    console.log("AssArray", this.state.assArray)
    this.setState({
      assignmentName : ar[data.length-1].name, 
      assignmentDateDue: ar[data.length-1].date,
      assignmentNotice: ar[data.length-1].notice,
    })
  }

  //exam marks for next screen
  async getExamMarks() {
    let data = this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items
    let ar = []
    for (let index = 0; index < data.length; index++) {
      let r={
        name: data[index].name,
        maxMarks: data[index].marks.items[0].maxMarks,
        marksObt: data[index].marks.items[0].marksObtained,
        date: data[index].dueDate,
      }
      ar.push(r)
    }
    this.setState({exaArray: ar})
    console.log("exaArray", this.state.assArray)
  }
  //exam quenstion paper
  async examGetData(){
    //var QP = require('./data.json');
    let quizzJSON = JSON.parse(this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items[0].uploadJSON)
    console.log("QUizz JSON",quizzJSON)
    this.setState({quizzJSON: quizzJSON})
  }

  async upload(){
    console.log("upload pressed", this.state.assignmentName)
    try{
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      const response = await fetch(res.uri)
      const blob = await response.blob();
      console.log(this.state.uplname);
      let key = await Storage.put(this.state.uplname ,blob, {
        level:'private',
        contentType: 'text/plain',
      });
      showMessage({
        message: "File Uploaded!",
        autoHide:true,
        duration:1800,
        type: "success",
      });
    }
    catch(error){
      if (DocumentPicker.isCancel(error)) {
        showMessage({
          message: "No file selected!",
          autoHide:true,
          duration:1800,
          type: "danger",
        });
      }
      else{
        console.log(error)
        alert('Unknown Error: ' + JSON.stringify(error));
        throw error;
      }
    }
  }


  

async download(){
  console.log("downlaod pressed")
  try{
  const down = await Storage.get(this.state.uplname, { level: 'private' })
  console.log("URI", down)
  let dirs = RNFetchBlob.fs.dirs
  RNFetchBlob
  .config({
  // response data will be saved to this path if it has access right.
  path : dirs.DocumentDir + '/'+'Assignmnet'+'.txt'
  })
  .fetch('GET', down, {
  //some headers ..
  })
  .then((res) => {
  // the path should be dirs.DocumentDir + 'path-to-file.anything'
  console.log('The file saved to ', res.path())
})
  showMessage({
  message: "Downloaded!",
  autoHide:true,
  duration:1800,
  type: "success",
});
  }
  catch(error){
    console.log('download error:',error);
  }
}

async remove(){
  console.log("Assignment remove")
  try{
  const del = await Storage.remove(this.state.uplname, { level: 'private' })
  showMessage({
    message: "Removed Succesfully!",
    autoHide:true,
    duration:1800,
    type: "success",
  });
  }
  catch(error){
    console.log('delete error:',error)
  }
}

handleExam(){
  console.log("Go to Exam Page")
  Actions.push('quizIntro',{
    username:this.state.username,
    quizzName: this.state.quizzName,
    quizzJSON: this.state.quizzJSON,
    subjectName: this.state.subjectName, 
    subjectCode: this.state.subjectCode})

}


handleGoToAss(){
  console.log("go to Assignment")
  Actions.push('assignment',{
    subjectName: this.state.subjectName, 
    subjectCode: this.state.subjectCode, 
    userName: this.state.username,
    assignmentDateDue: this.state.assignmentDateDue,
    assignmentName:this.state.assignmentName,
    assignmentNotice: this.state.assignmentNotice
  } )
}

handleMarks(){
  console.log("go to Marks")
  let marksArray = this.state.assArray.concat(this.state.exaArray)
  Actions.marks({
    usNa: this.state.username,
    subjectName: this.state.subjectName,
    subjectCode: this.state.subjectCode,
    data: marksArray
  })
}


  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": 52,
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:"100%",
        height:"15%"
      }
    } >
    <TouchableOpacity onPress={()=> Actions.pop()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Actions.push('notifications')}>
    <Svg width={40} height={38} viewBox="0 0 20 29">
          <Path
            fill="#43516f"
            d="M15.734 11.453v-4.48a6.963 6.963 0 10-13.925 0v4.48l-1.81 3.575h17.589z"
            data-name="Path 1"
          />
          <Path
            fill="#43516f"
            d="M5.826 16.065a2.935 2.935 0 105.87 0z"
            data-name="Path 2"
          />
    </Svg>
    </TouchableOpacity>
    
    </View>
    
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text>
    <View style={{height:65,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          <ScrollView nestedScrollEnabled={true} centerContent={true} showsVerticalScrollIndicator={false} contentContainerStyle={{"flexDirection":"column","alignItems":"center","marginTop": "3%","justifyContent":"space-around"}}>
            <View style={{flexDirection:"row",marginBottom:"5%",width:"80%",alignItems:"center", justifyContent:"space-around"}}>
            {this.state.sessions.map((data,key)=> (
              <TouchableWithoutFeedback>
              <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
                <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                  {data.day}{"\n"}{data.time}
                </Text>
              </View>
              </TouchableWithoutFeedback>
            ))}
            </View>            
          </ScrollView>
    </View>   
    <TouchableOpacity onPress={()=>Actions.push('attendance',{subjectId: this.state.subjectId,subjectName: this.state.subjectName, subjectCode: this.state.subjectCode})}>
    <View style={{alignItems:"flex-start",paddingLeft:"5%", marginTop:"15%", flexDirection:"row",marginLeft:"-5%"}}>
            <Progress.Bar progress={0.75} width={200} height={10} borderRadius={20} color={'#3FDF64'} borderColor={'rgba(108, 92, 189,0)'} unfilledColor={'#E9EDF1'}>
            </Progress.Bar>
            <View style={{"alignItems":"center",marginTop:"-7%",marginLeft:"7%","justifyContent":"center","paddingTop": "2%","width": 40,"height": 40,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
              <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 14,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                75%
              </Text>
            </View>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>  this.handleMarks()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"10%",
        "width": 120,
        "height": 50,
        "borderRadius": 30,
        "backgroundColor": "rgba(60, 114, 219, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Mark View </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    <TouchableOpacity onPress= {()=>this.handleExam()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"10%",
        "width": 120,
        "height": 50,
        "borderRadius": 30,
        "backgroundColor": "rgba(60, 114, 219, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Quiz </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>
    </View>
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Notice </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": 300,
        "height": 60,
        "borderRadius": 15,
        "marginTop":"3%",
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontWeight": "400",
        "fontSize": 16,
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectNotice} </Text>
    </View>

    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Assignment </Text>
    
    <View style={{width:"100%",marginLeft:"25%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <Swipeable rightButtons={
          [
            <TouchableOpacity onPress= {()=>this.upload()} style={{marginTop:"8%"}}>
              <View>
              <Svg width={38} height={38} viewBox="0 0 38 38">
                <G transform="translate(6.11 -45.699)">
                  <Rect
                    width={38}
                    height={38}
                    fill="#3d73dd"
                    data-name="Rectangle 15"
                    rx={19}
                    transform="translate(-6.11 45.699)"
                  />
                  <G data-name="Group 6">
                    <G fill="#f8f8f8" data-name="Group 5">
                      <Path
                        d="M19.09 62.394a6.007 6.007 0 00-7.275-4.251 5.893 5.893 0 00-4.52 5.252 3.2 3.2 0 00-2.694 3.669 3.248 3.248 0 003.24 2.669h2.725v-1.06H7.841a2.129 2.129 0 110-4.257.539.539 0 00.545-.532 4.848 4.848 0 014.9-4.793 4.877 4.877 0 014.818 3.862.54.54 0 00.463.426 2.672 2.672 0 012.314 3.009 2.7 2.7 0 01-2.684 2.285h-2.18v1.06h2.18a3.716 3.716 0 00.894-7.342z"
                        data-name="Path 15"
                      />
                      <Path
                        d="M12.838 63.518l-2.563 2.563.9.9 1.474-1.467v6.145h1.282v-6.141l1.467 1.467.9-.9-2.56-2.567a.641.641 0 00-.9 0z"
                        data-name="Path 16"
                      />
                    </G>
                  </G>
                </G>
              </Svg>
              </View>
            </TouchableOpacity>,
            <TouchableOpacity onPress= {()=>this.download()}style={{marginTop:"8%"}}>
              <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <G transform="translate(6.11 -45.699)">
                  <Rect
                    width="38"
                    height="38"
                    fill="#43516f"
                    data-name="Rectangle 15"
                    rx="19"
                    transform="translate(-6.11 45.699)"
                  ></Rect>
                  <G data-name="Group 6" transform="translate(4.557 56.965)">
                    <G fill="#f8f8f8" data-name="Group 5">
                      <Path
                        d="M14.533 59.461a6.007 6.007 0 00-7.275-4.251 5.893 5.893 0 00-4.52 5.252 3.2 3.2 0 00-2.694 3.669 3.248 3.248 0 003.24 2.669h2.725v-1.06H3.284a2.129 2.129 0 110-4.257.539.539 0 00.545-.532 4.848 4.848 0 014.9-4.793 4.877 4.877 0 014.818 3.862.54.54 0 00.463.426 2.672 2.672 0 012.314 3.009 2.7 2.7 0 01-2.684 2.285h-2.18v1.06h2.18a3.716 3.716 0 00.894-7.342z"
                        data-name="Path 15"
                        transform="translate(0 -55.032)"
                      ></Path>
                      <Path
                        d="M183.6 249.2l-2.563 2.563.9.9 1.474-1.467v6.145h1.282V251.2l1.467 1.467.9-.9-2.56-2.567a.641.641 0 00-.9 0z"
                        data-name="Path 16"
                        transform="rotate(180 96.39 132.352)"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              </View>
            </TouchableOpacity>,
            <TouchableOpacity onPress= {()=>this.remove()} style={{marginTop:"8%"}}>
             <View>
             <Svg width={38} height={38} viewBox="0 0 38 38">
                 <G transform="translate(6.11 -45.699)">
                   <Rect
                     width={38}
                     height={38}
                     fill="#6c5cbd"
                     data-name="Rectangle 15"
                     rx={19}
                     transform="translate(-6.11 45.699)"
                   />
                   <G fill="#f8f8f8">
                     <Path
                       d="M12.216 65.647H.351a.614.614 0 110-1.227h11.865a.614.614 0 110 1.227zm0 0"
                       data-name="Path 17"
                     />
                     <Path
                       d="M8.942 68.916a.614.614 0 01-.434-1.048l2.84-2.839-2.84-2.84a.614.614 0 01.868-.868l3.273 3.273a.614.614 0 010 .868l-3.273 3.273a.609.609 0 01-.434.181zm0 0"
                       data-name="Path 18"
                     />
                     <Path
                       d="M12.557 74.035a8.955 8.955 0 01-8.378-5.709.614.614 0 111.142-.448 7.774 7.774 0 100-5.689.614.614 0 11-1.142-.448 9 9 0 118.378 12.294zm0 0"
                       data-name="Path 19"
                     />
                   </G>
                 </G>
               </Svg>
             </View>
           </TouchableOpacity>
           
          ]
      
      } rightButtonContainerStyle={{marginLeft:"-5%"}} rightActionActivationDistance={15} rightButtonWidth={90}>
    <TouchableOpacity onPress= {()=>this.handleGoToAss()}>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent":"space-around",
        "marginVertical":"5%",
        "width": "80%",
        "height": 80,
        "borderRadius": 15,
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "marginVertical":"7%",
        "fontSize": 14,
        "color": "rgba(67, 81, 111, 255)",
        "textAlignVertical":"center"
      }
    } >{ (this.state.assignmentName === "")? "No Assignment Available" : this.state.assignmentName }</Text>
    <View style = {
      {
        "alignItems": "flex-end",
        "marginVertical":"4%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 14,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > {this.state.subjectCode} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 12,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > Due date: {this.state.assignmentDateDue} </Text>
    </View>
    </View>
    </TouchableOpacity>
    </Swipeable>

    </View>
    
    </View>
    
    </View>
  );
  };
};
export default Subject ;