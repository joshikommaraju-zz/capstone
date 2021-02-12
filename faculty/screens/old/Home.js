import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Storage } from 'aws-amplify';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G } from "react-native-svg"
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
import { YellowBox } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getStudentByUsername } from '../src/graphql/queries';
import DocumentPicker from 'react-native-document-picker';
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';





YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);




class Home extends Component{
  constructor(props) {
    super(props);
    this.state={
      username: "",
      userData: {},
      DBdata: {},
      slots: [],
      subjects:[{subName: "Sceience for Class 4", subCode: "SCI1004",slots:[{day:"M", time: "9 AM"},{day:"T", time: "9 AM"},{day:"S", time: "9 AM"}]},{subName: "Sceience for Class 4", subCode: "SCI1004",slots:[{},{},{}]}],
      assignments:[{name: "assignment1",subCode: "sci2004",dueDate: "8 PM on 24 th Jan" },{},{}],
    };
  }

  async getToken(user) {
    try {
      let userData = await AsyncStorage.getItem("@userData");
      let usNa = await AsyncStorage.getItem("@userId");
      global.userId = usNa
      console.log("username",global.userName)
      this.setState({username: usNa})
      let data = JSON.parse(userData);
      this.setState({userData : data});
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  async componentDidMount() {
    console.log("Home Screen Entered")
    this.getToken();
    const studentData = await API.graphql(graphqlOperation(getStudentByUsername, {username: this.state.username}));
    let usNa = studentData.data.getStudentByUsername.name
    this.setState({DBdata: studentData.data.getStudentByUsername})
    await AsyncStorage.setItem("@DBdata",JSON.stringify(this.state.DBdata))
    console.log("DB Data",this.state.DBdata)
    let s =[]
    for (let index = 0; index < studentData.data.getStudentByUsername.classSection.subjects.items.length; index++) {
      
      let ts =[]
      for (let index2 = 0; index2 < studentData.data.getStudentByUsername.classSection.subjects.items[index].timetableSlots.items.length; index2++) {
        ts.push(studentData.data.getStudentByUsername.classSection.subjects.items[index].timetableSlots.items[index2])
      }
      let r ={
        subName:studentData.data.getStudentByUsername.classSection.subjects.items[index].subjectName,
        subCode:studentData.data.getStudentByUsername.classSection.subjects.items[index].subjectCode,
        subjectId:studentData.data.getStudentByUsername.classSection.subjects.items[index].id,
        slots: ts
      }
      s.push(r)
    }
    this.setState({subjects: s,username: usNa});
    this.getAssignments()
 }

 async getAssignments(){
  console.log("Getting Assignments")
  let arr =[]
  const len = this.state.DBdata.classSection.subjects.items.length
  console.log("len",len)
   for (let index = 0; index < len; index++) {
    var len2 = this.state.DBdata.classSection.subjects.items[index].assignment.items.length -1
    console.log("len2",len2)
    if(len2>=0){
    let r= {
      name:this.state.DBdata.classSection.subjects.items[index].assignment.items[len2].name,
      notice:this.state.DBdata.classSection.subjects.items[index].assignment.items[len2].notice,
      subCode:this.state.DBdata.classSection.subjects.items[index].assignment.items[len2].subject.subjectCode,
      dueDate: this.state.DBdata.classSection.subjects.items[index].assignment.items[len2].dueDate,
    }
     arr.push(r)
    }
  }
   this.setState({assignments: arr})
   console.log("Assignments",arr)
 }

 handeConf(){
   console.log("go to conference")
   Actions.push('conference')
 }

 

  handleProfile = () =>{
    console.log("go to Profile page");
    Actions.push('profile',{DBdata: this.state.DBdata,subData: this.state.subjects})
  }
  handleNotifications = () =>{
    console.log("go to Notifications page");
    Actions.push('notifications',{DBdata: this.state.DBdata})
  }

  
  async handleUpload(assignName,subjectCode){
  console.log("upload pressed");
    try{
      let uplname = subjectCode+'_'+assignName+'_'+this.state.username;
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
      console.log(uplname);
      let key = await Storage.put(uplname ,blob, {
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
  
  async handleDownload(assignName,subjectCode){
    console.log("Download pressed");
    try{
      let uplname = subjectCode+'_'+assignName+'_'+this.state.username;
      const down = await Storage.get(uplname, { level: 'private' })
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
  
  async handleRemove(assignName,subjectCode){
    console.log("delete Pressed");
    let uplname = subjectCode+'_'+assignName+'_'+this.state.username;
    try{
      const del = await Storage.remove(uplname, { level: 'private' })
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

  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column"}} >
    
     <View style = {
      {
        "alignItems": "flex-start",
        "justifyContent":"space-between",
        "paddingTop": 52,
        "flex": 1,
        "flexDirection":"row",
        paddingLeft:"10%",
        paddingRight:"10%",
        width:"100%",
        height:"15%"
      }
    } >
    <View>
      <TouchableOpacity onPress={() => this.handleProfile()}>
      <Svg width={40} height={28} viewBox="0 0 20 22">
      <Path
        fill="#43516f"
        d="M1 0a1 1 0 100 2h18a1 1 0 100-2zm0 6a1 1 0 100 2h18a1 1 0 100-2zm0 6a1 1 0 100 2h18a1 1 0 100-2z"
      />
    </Svg>
    </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={() => this.handleNotifications()}>
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
    </View>
    
     <View style={{alignItems:"flex-start",height:"15%", width:"100%", paddingLeft:"10%"}}>
    <Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "textAlign":"left",
        "fontSize": 21,
        "color": "rgba(102, 107, 117, 255)"
      }
    } > Hello, </Text>
    <Text style={{"fontFamily":"Poppins-Medium","fontSize":28,"color":"rgba(67, 81, 111, 255)"}}>{this.state.username}</Text >
    </Text>
    </View>
    
    <ScrollView showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{flexGrow:1,height:"30%",width:"100%",paddingLeft:"10%"}} horizontal={true}>
      {this.state.subjects.map((data,key)=>(
        <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
          <View style={{"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": 270,"height": 245,"borderRadius": 25,"backgroundColor": "rgba(61, 115, 221, 255)",
          shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.3, shadowRadius:48, elevation:14}}>
            <View style={{alignItems:"flex-start",position:"absolute",marginLeft:"15%",marginTop:"-15%"}}>
              <View style={{alignItems:"flex-start","width": 75,"height": 75,"borderRadius": 50,"backgroundColor": "#FFF",shadowColor:"#FFF",shadowOffset: { width: 0, height: 4 },shadowOpacity:0.2, shadowRadius:48, elevation:4}}>
                <TouchableOpacity onPress ={()=> this.handeConf()}>
                <View style={{alignContent:"center",marginLeft:"30%",marginTop:"27%"}}>
                  <Svg width={35} height={36} viewBox="0 0 24 26.636">
                  <Path fill="#3d73dd" d="M4.348.587C1.947-.79 0 .338 0 3.106v20.422c0 2.77 1.947 3.9 4.348 2.521l17.85-10.237c2.4-1.378 2.4-3.61 0-4.988z" data-name="Path 3"/>
                  </Svg>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity 
            onPress={()=>Actions.push('subject',{ 
              usNa: this.state.username,
              sessions: data.slots,
              subjectName: data.subName, 
              subjectCode : data.subCode,
              keVa: key, 
              })}>
            <View style = {{"alignItems": "flex-start","marginLeft": "80%","marginTop":"5%","width": 10,"height": 10,"borderRadius": 5,"borderWidth": 1,"borderColor": "rgba(255, 255, 255, 255)","backgroundColor": "rgba(63, 223, 100, 255)"}}/>
              <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": 18,"color": "#FFF","width":"90%","marginTop": "10%"}} >
                {data.subName}
              </Text>
            <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": 16,"color": "#FFF","width":"90%","marginTop": "2%","marginTop":"2%"}} >
              {data.subCode}
            </Text>
            </TouchableOpacity>
            <View style={{height:50,alignItems:"center",marginRight:"3%",justifyContent:"center",flexDirection:"row"}}>
              <ScrollView nestedScrollEnabled={true} centerContent={true} showsVerticalScrollIndicator={false} contentContainerStyle={{"flexDirection":"column","alignItems":"center","marginTop": "3%","justifyContent":"space-around"}}>
                <View style={{flexDirection:"row",marginBottom:"5%",marginRight:"7%",width:"80%",alignItems:"center", justifyContent:"space-around"}}>
                {data.slots.map((data,key)=>(
                  <TouchableWithoutFeedback>
                  <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 40,"height": 40,"borderRadius": 7,"backgroundColor": "rgba(38, 90, 191, 255)"}}>
                    <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 10,"textAlign": "center","textAlignVertical":"center","color": "#FFF"}} >
                      {data.day}{"\n"}{data.time}
                    </Text>
                  </View>
                  </TouchableWithoutFeedback>
                ))}
                </View>
              </ScrollView>
            </View>
            <View style={{alignItems:"flex-start",paddingLeft:"5%", marginTop:"10%", flexDirection:"row"}}>
              <Progress.Bar progress={0.75} width={135} height={5} borderRadius={20} color={'#3FDF64'} borderColor={'rgba(108, 92, 189,0)'} unfilledColor={'#FFF'}>
              </Progress.Bar>
              <View style={{"alignItems":"center",marginTop:"-7%",marginLeft:"5%","justifyContent":"center","paddingTop": "2%","width": 35,"height": 35,"borderRadius": 7,"backgroundColor": "rgba(38, 90, 191, 255)"}}>
                <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#FFF"}} >
                  75%
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={{marginRight:30}}></View>
    
    </ScrollView>
    <Text style={{"fontFamily":"Poppins-Medium","marginTop":"3%","fontSize":24,"color":"rgba(67, 81, 111, 255)"}}>Assignment</Text >
    <ScrollView style={{height:"20%",paddingLeft:"10%",width:"100%"}}>   
    {this.state.assignments.map((data,key)=>(
      <Swipeable rightButtons={
        [
          <TouchableOpacity onPress= {()=>this.handleUpload(data.name,data.subCode)} style={{marginTop:"8%"}}>
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
          <TouchableOpacity onPress= {()=>this.handleDownload(data.name,data.subCode)}style={{marginTop:"8%"}}>
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
          <TouchableOpacity onPress= {()=>this.handleRemove(data.name,data.subCode)} style={{marginTop:"8%"}}>
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

      } rightActionActivationDistance={15} rightButtonWidth={60}>
      <View style = {
        {
          "flexDirection": "row",
          "alignItems": "flex-start",
          "justifyContent":"space-around",
          "marginVertical":"5%",
          "width": "90%",
          "height": 70,
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
      } > {data.name} </Text>
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
      } > {data.subCode} </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 12,
          "textAlign": "right",
          "color": "rgba(67, 81, 111, 255)",
        }
      } > {data.dueDate} </Text>
      </View>
      </View>
      </Swipeable>
    ))}
    

    </ScrollView>

    </View>

  )
};
};

export default Home;