import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { Storage } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";
import RNFetchBlob from 'rn-fetch-blob';
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import DocumentPicker from 'react-native-document-picker';
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { API, graphqlOperation } from 'aws-amplify';
import { getFacultyByUsername } from '../src/graphql/queries';
import { YellowBox } from 'react-native';
import { Dimensions } from 'react-native';
 
const {width, height} = Dimensions.get('window');

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);




class Subject extends Component{
  constructor(props) {
    super(props);
    this.state={
      DBdata: {},
      keyValf: null,
      assArray: [],
      sessions:[{day:"M", time: "9 AM"},{day:"F", time: "2 PM"},{day:"S", time: "9 AM"}],
      notice: "",
      attendance: "",
      subjectName: "",
      subjectCode: "",
      subjectNotice:"",
      assignmentDateDue: "",
      assignmentName:"",
      assignmentNotice: "",
      slots: {},
      uplname: "",
      facData: {},
      username: "",
      quizzName: "",
      quizzJSON:{},
      examID: '',
      keyVal: null,
      exaArray:[],
      school: "",
      class: "",
      section : "",
      total: 15,
      studAtt: null,
      progress: '',
      months: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    //let data = await AsyncStorage.getItem(key);
    // this.setState({data: data});
    let dat = await AsyncStorage.getItem("@DBdata")
    let data = JSON.parse(dat)
    let usNa= this.props.usNa
    let ses = this.props.sessions
    let suNa = this.props.subjectName
    let suCo = this.props.subjectCode
    let keVa = this.props.keVa
    let school = this.props.school
    let classN = this.props.class
    let section = this.props.section
    let suNo = data.classSection.subjects.items[keVa].notice
    await this.setState({
      DBdata: data,
      keyVal: keVa,
      subjectName: suNa,
      subjectCode: suCo,
      subjectNotice: suNo,
      sessions: ses,
      username: usNa,
      section : section,
      class: classN,
      school : school,
    })
    console.log("Subject Screen Entered: ",this.state.subjectName)
    //console.log("subejct data",this.state.DBdata.classSection.subjects.items[this.state.keyVal].assignment.items)
    //console.log("key val", this.state.keyVal)
    await this.getAssignments()
    this.getMarks()
    this.examGetData()
    let uplName = this.state.school+'/'+this.state.class+'/'+this.state.section+'/'+this.state.subjectCode+'/'+this.state.school+'_'+this.state.subjectCode+'_'+this.state.assignmentName+'_'+this.state.class+'_'+this.state.section+'_'+global.userId+'.pdf';
    await this.setState({uplname: uplName})
    //console.log("need",this.state.DBdata.classSection.subjects.items[this.state.keyVal].assignment.items[0].marks.items[0])
    let studAt = 0
    let facAt = 0
    let facUN = data.classSection.subjects.items[keVa].timetableSlots.items[0].faculty.username;
    //retrive faculty data
    const facultyData = await API.graphql(graphqlOperation(getFacultyByUsername, {username: facUN}));
    let fd = facultyData.data.getFacultyByUsername
    await AsyncStorage.setItem("@FData", JSON.stringify(fd))
    //search for subject in stu's attendance
    let sindex = 0
    for (sindex =0; sindex < data.attendance.items.length; sindex++) {
      if (data.attendance.items[sindex].subject.subjectCode == this.state.subjectCode){
        break
      }
    }
    //search for subject in fac's attendance
    let findex = 0
    for (findex =0; findex < fd.attendance.items.length; findex++) {
      if (fd.attendance.items[findex].subject.subjectCode == this.state.subjectCode){
        break
      }
    }



      for(let i =0; i<12;i++){
        let mn = this.state.months[i]
        let moS = []
        let moF = []
        switch(mn){
          case "jan" : moS=data.attendance.items[sindex].jan;
          moF=fd.attendance.items[findex].jan
          break;
          case "feb" : moS=data.attendance.items[sindex].feb;
          moF=fd.attendance.items[findex].feb
          break;
          case "mar" : moS=data.attendance.items[sindex].mar;
          moF=fd.attendance.items[findex].mar
          break;
          case "apr" : moS=data.attendance.items[sindex].apr;
          moF=fd.attendance.items[findex].apr
          break;
          case "may" : moS=data.attendance.items[sindex].may;
          moF=fd.attendance.items[findex].may
          break;
          case "jun" : moS=data.attendance.items[sindex].jun;
          moF=fd.attendance.items[findex].jun
          break;
          case "jul" : moS=data.attendance.items[sindex].jul;
          moF=fd.attendance.items[findex].jul
          break;
          case "aug" : moS=data.attendance.items[sindex].aug;
          moF=fd.attendance.items[findex].aug
          break;
          case "sep" : moS=data.attendance.items[sindex].sep;
          moF=fd.attendance.items[findex].sep
          break;
          case "oct" : moS=data.attendance.items[sindex].oct;
          moF=fd.attendance.items[findex].oct
          break;
          case "nov" : moS=data.attendance.items[sindex].nov;
          moF=fd.attendance.items[findex].nov
          break;
          case "dec" : moS=data.attendance.items[sindex].dec;
          moF=fd.attendance.items[findex].dec
          break;
          default: console.log("Something @ went Wrong");
        }
        for(let j=0; j<31; j++){
          facAt = facAt+moF[j]
          if(moF[j]==1 && moS[j]==1){
            studAt = studAt+1
          }
        }   
      }
    await this.setState({studAtt: studAt,total: facAt})
     let div= (studAt/facAt)
     this.setState({progress: div.toFixed(1)})
    await AsyncStorage.setItem("@"+this.state.subjectCode,String(div.toFixed(1)))
  }



  //displaying assignment
  async getAssignments(){
    console.log("get assignment function")
    let data = this.state.DBdata.classSection.subjects.items[this.state.keyVal].assignment.items
    console.log("Assignment raw data",data)
    console.log("raw len",data.length)
    let ar = []
    for (let index = 0; index < data.length; index++) {
      let r={
        name: data[index].name,
        //maxMarks: data[index].marks.items[0].maxMarks,
        //marksObt: data[index].marks.items[0].marksObtained,
        date: data[index].date,
        notice: data[index].notice,
        id: data[index].id
      }
      ar.push(r)
    }
    await this.setState({assArray: ar})
    console.log("AssArray", this.state.assArray)
    let max = 0
    let gind =0
    for (let b = 0; b < ar.length; b++) {
      if((ar[b].date).localeCompare(max) > 0){
        max= ar[b].date
        gind = b;
      }
    }
    this.setState({
      assignmentName : ar[gind].name, 
      assignmentDateDue: ar[gind].date,
      assignmentNotice: ar[gind].notice,
    })
  }

  //exam marks for next screen
  async getMarks() {
    let data = this.state.DBdata.marks
    //let data = this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items
    let ar = []
    //console.log("maeks length",data.items.length)
    //console.log("marks array fetched:",data.items[0])
    for (let index = 0; index < data.items.length; index++) {
      let per = data.items[index]
      if(per.subjectCode == this.state.subjectCode){
          let r={
            name: per.name,
            maxMarks: per.maxMarks,
            marksObt: per.marksObtained,
            subjectCode: per.subjectCode,
            date: per.date,
            id: per.id
          }
          ar.push(r);
      }
    }
    await this.setState({exaArray: ar})
    //console.log("exam Array", this.state.exaArray)
  }

  async examGetData(){
    //var QP = require('./data.json');
    let QPr = this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items
    console.log("exams available DB",QPr)
    let len = QPr.length
    console.log("length",len)
    let max = 0
    let gind =0
    for (let index = 0; index < len; index++) {
        if((QPr[index].date).localeCompare(max) > 0){
          max= QPr[index].date
          gind = index;
      }
    }
    let examid = this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items[gind].id
    let tempQP = this.state.DBdata.classSection.subjects.items[this.state.keyVal].exams.items[gind].uploadJSON
    //console.log("temp QP",tempQP)
    var l = tempQP.toString()
    //console.log("after to string",l)
    var b = l.replace(/'/g, '"');
    //console.log("temp OP after change",b)
    let quizzJSON = JSON.parse(b)
    //console.log("QUizz JSON",quizzJSON)
    this.setState({quizzJSON: quizzJSON,examID: examid})
  }

  async upload(){
    console.log("upload pressed", this.state.assignmentName)
    try{
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      const response = await fetch(res.uri)
      const blob = await response.blob();
      //console.log(this.state.uplname);
      let key = await Storage.put(this.state.uplname ,blob, {
        progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        level:'public',
        //contentType: 'text/plain',
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
    const down = await Storage.get(this.state.uplname, { level: 'public', /*download :true ,  contentType: 'text/plain'*/})
    //console.log("URI", down)
    console.log("name", this.state.uplname)
    //let down = 'https://vedav2bsore172309-dev.s3.ap-south-1.amazonaws.com/public/Veda_EVS1020_Assignment%201_10_A_demo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAS3ULOZ7NUQOKC7VO%2F20201004%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20201004T080358Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiSDBGAiEA9pEP%2BjbQdmnQ%2BkZ91r3k9Bys%2FRYVXIPwC2S%2FJapSLIACIQCSB3brTlvzlIrR2m37R92DUQjNKAZ98XxS%2FcIuWO3pkyrTBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE5Njc4NzIyODYzNSIMS7Z%2FUly3ToxNvbolKqcEXaw9dn%2F8YIrFfa9DOFTW%2FNQ1QHxZSIHLrU5bNIu94RrZ5GrTv0K5%2Fk2qht2qA1bVR73NRkV7sGwHBeIJcbHhkgm3kG87W2it0zBwuQKxj5Bvj%2BXFGb2hdAlHrccITcR57M94Vb%2Boy2K9gTBVe%2FzXAYCQZh7XFP5R67jJOQJXFLP%2B0X4A4x0%2FmNkw6XA9Mb1glYJ%2BI7KhxeXvN68O5yF7qD4i%2F3ftOSh7dlvok6WgAbJoVAGkN%2BZaroUfUGNNlBAry2rATtIY62vMLStbLi37u1AMj%2B9aEwLPL6zvaskzOY6XEOi3pzArq8Z1WZv5T8wewoGBzNZFeVd0pn%2FLLq6p4TRPq44m0L5FQ3d6MDWRW7nZGGNKg0buI8FVwczkaHApUNpF3isXktYKwGK1C3WtH1otXyjLEhQcrjbxgBn%2BsH3A1y8vpT1aKF%2FlMSPklUEryo%2BZWlLnYkAR0%2BYXGFxfAzlhGa1BhzuCSZ0IiGwG4hLlpinzrQ5pXNDHZ1uXCHqpfctZu7iW6HpKvlt6YrmkgH1MoGMqjUPXwqKb7UvI3TqEjKWUsx0imIU62bOh3i90GDvcG3IPmWkjcddA8CnSTWXnCTQkJeRepTvhZy043BzT%2Fi0UdqC2h6jOcLUAvU%2FoNQ%2BkWl4pgOkOj0bxFZ7UTf8Lte5QF%2FP%2FgviIWu5AwKRF16Ef9oAMkzuxdBTM7cN2kclEDyk4hIDNKl46IJuLZPZKPa77e3AwrIHm%2BwU6hAIJGZbA0cz1WxWbAD36heENc9WdnxGdbdl9gexD8PVYudRxdrxhJALF4xnEsLXA%2B%2BNMGFSEBPwsnWAjO01yJmVzzKfot7I64kJDHWYiucQ0Mr8FUFlFxFNiZL4cswHXA%2FNxS5EIQQ6TcBFwfkE1K1O0NFSE4DQJDwubAJO0qt%2F8Hs%2B%2B43LgkuxA%2Fe2N%2FOyXdfCwjAd33TkWCahrBzmlBFOAw5ASkwSbykUreeB3aL5zPHqwceEiZKiWmtXuQWlWw7PYDZd4SjXXgaMV5XepdR3aNFjrRaDhiUfY0NrXv3CCN3wLAoE6%2F4%2FZdaThyoq4g1ERi1WZR5BWZfOg8qrh5IbzTFXF3Q%3D%3D&X-Amz-Signature=b443356ffdba9b298980a647aaac363e23deb3c16378240470a72592e346d401&X-Amz-SignedHeaders=host&response-content-type=text%2Fplain&x-amz-user-agent=aws-sdk-js-v3-react-native-%40aws-sdk%2Fclient-s3%2F1.0.0-gamma.4%20aws-amplify%2F3.4.5%20react-native&x-id=GetObject'
    const { dirs } = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      description : 'Downloading Assignemnt.',
      mime: 'application/pdf',
      mediaScannable: true,
      title: `${this.state.subjectCode}_${this.state.assignmentName}.pdf`,
      path: `${dirs.DownloadDir}/${this.state.subjectCode}_${this.state.assignmentName}.pdf`,
      },
    })
      .fetch('GET', down, {})
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((e) => {
        console.log(e)
      });

    //const text = await (new Response(down)).text()
    //android.actionViewIntent(toString(down.Body), 'application/pdf');
    showMessage({
    message: "Downloaded!",
    autoHide:true,
    duration:1800,
    type: "success",
  });
    /*}
    catch(error){
      console.log('download error:',error);
    }
  }
  */
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
    //console.log("paper sent:",this.state.quizzJSON )
    Actions.push('quizIntro',{
      username:this.state.username,
      quizzName: this.state.quizzName,
      quizzJSON: this.state.quizzJSON,
      userID: this.state.DBdata.id,
      examID: this.state.examID,
      subjectName: this.state.subjectName, 
      subjectCode: this.state.subjectCode
    })
  }

  handleGoToAss(){
    console.log("go to Assignment")
    Actions.push('assignment',{
      subjectName: this.state.subjectName, 
      subjectCode: this.state.subjectCode, 
      userName: this.state.username,
      assignmentDateDue: this.state.assignmentDateDue,
      assignmentName:this.state.assignmentName,
      assignmentNotice: this.state.assignmentNotice,
      class: this.state.class,
      section: this.state.section,
      school: this.state.school
    } )
  }

  handleMarks(){
    console.log("go to Marks")
    let marksArray = this.state.exaArray
    Actions.marks({
      usNa: this.state.username,
      subjectName: this.state.subjectName,
      subjectCode: this.state.subjectCode,
      data: marksArray
    })
  }

  handleAttendance(){
    Actions.push('attendance',{
      keVa: this.state.keyVal,
      subjectId: this.state.subjectId,
      subjectName: this.state.subjectName, 
      subjectCode: this.state.subjectCode,
      total:this.state.total,
      studAtt: this.state.studAtt,
      progress: this.state.progress,
      facData: this.state.facData
    })
  }


  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": height*0.05, 
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:width,
        height:height*0.1
      }
    } >
    <TouchableOpacity onPress={()=> Actions.popTo('home')}>
    <Svg width={height*0.052} style={{marginTop:"-40%"}} height={height*0.052} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    
    
    </View>
    
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.02,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text>
    <View style={{height:height*0.089,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
          
    </View>   
    
    <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>  this.handleMarks()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"10%",
        "width": width*0.258,
        "height": height*0.062,
        "borderRadius": 0,
        "backgroundColor": "#9E9A35"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.018,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Mark View </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    
    </View>
    </View>
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Notice </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.76,
        "height": height*0.095,
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
        "fontSize": height*0.02,
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectNotice} </Text>
    </View>

    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "center",
        "color": "#9E9A35"
      }
    } > Assignment </Text>
    
    <View style={{width:"100%",marginLeft:"25%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <Swipeable rightButtons={

      [<TouchableWithoutFeedback></TouchableWithoutFeedback>,
        <TouchableOpacity onPress= {()=>this.upload()} style={{marginTop:"8%"}}>
              <Svg width={height*0.05} height={height*0.05} viewBox="0 0 38 38">
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
              
            </TouchableOpacity>,
            <TouchableOpacity onPress= {()=>this.download()} style={{marginTop:"8%"}}>
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
        <TouchableOpacity onPress= {()=>this.handleGoToAss()} style={{marginTop:"8%"}}>
         <View>
         <Svg width={height*0.05} height={height*0.05} viewBox="0 0 38 38">
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
      
    } rightButtonContainerStyle={{marginLeft:"-12%"}} rightActionActivationDistance={15} rightButtonWidth={60}>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent":"space-around",
        "marginVertical":"5%",
        "width": width*0.75,
        "height": height*0.095,
        "padding":height*0.01,
        "borderRadius": 10,
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "marginVertical":"7%",
        "fontSize": height*0.015,
        "color": "rgba(67, 81, 111, 255)",
        "textAlignVertical":"center"
      }
    } > { (this.state.assignmentName === "")? "No Assignment Available" : this.state.assignmentName } </Text>
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
        "fontSize": height*0.015,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > {this.state.subjectCode} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": height*0.015,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > Due date: {this.state.assignmentDateDue} </Text>
    </View>
    </View>
    </Swipeable>

    </View>
    
    </View>
    
    </View>
    );
  };
};
export default Subject ;