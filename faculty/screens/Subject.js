import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { Storage } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import DocumentPicker from 'react-native-document-picker';
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight, TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { updateSubject } from '../graphql/mutations.js';
import { getFacultyByUsername } from '../graphql/queries.js';
import { API, graphqlOperation } from 'aws-amplify';
const {width, height} = Dimensions.get('window');

class Subject extends Component{
  constructor(props) {
    super(props);
    this.state={
      DBdata: {},
      assArray: [],
      sessions:[],
      notice: "",
      attendance: "",
      subjectName: "",
      subjectCode: "",
      subjectNotice:"",
      assignmentDateDue: "",
      assignId:"",
      slots: {},
      assignmentName:"",
      uplname: "",
      username: "",
      quizzName: "",
      quizzJSON:{},
      keyVal: null,
      exaArray:[],
      assignmentNotice: "",
      upNote:"",
      subjectId:"",
      examId:""
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
    console.log("Subject Screen Entered: ",this.state.subjectName)
    const facData = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    let data = facData.data.getFacultyByUsername

    let usNa= this.props.usNa
    let ses = this.props.sessions
    let suNa = this.props.subjectName
    let suCo = this.props.subjectCode
    let keVa = this.props.keVa
    let suNotice = this.props.suNo
    let suId = this.props.suId
    await this.setState({
      DBdata: data,
      keyVal: keVa,
      subjectName: suNa,
      subjectCode: suCo,
      subjectNotice: suNotice,
      sessions: ses,
      username: usNa,
      subjectId:suId,
      //examId:this.state.DBdata.timetableSlot.items[this.state.keyVal].subject.exams.items[0].id
    })
    console.log("key val", this.state.keyVal)
    console.log("notice id", this.state.DBdata.timetableSlot.items[this.state.keyVal].subject.assignment.items[0].id)
    let uplname = this.state.school+'/'+this.state.class+'/'+this.state.section+'/'+this.state.subjectCode+'/'+this.state.school+'_'+this.state.subjectCode+'_'+this.state.assignName+'_'+this.state.class+'_'+this.state.section+'_'+this.state.stuID+'.pdf';
    this.setState({uplname: uplname})
    this.assignmentGetData()
  }

  //displaying assignment
  async assignmentGetData(){
    let data = this.state.DBdata.timetableSlot.items[this.state.keyVal].subject.assignment.items
    let ar = []
    for (let index = 0; index < data.length; index++) {
      let r={
        name: data[index].name,
        maxMarks: data[index].marks.items[0].maxMarks,
        marksObt: data[index].marks.items[0].marksObtained,
        type: data[index].marks.items[0].type,
        date: data[index].date,
        notice: data[index].notice,
        id: data[index].id
      }
      ar.push(r)
    }
    this.setState({assArray: ar})
    console.log("AssArray", this.state.assArray)
    this.setState({
      assignId: ar[0].id,
      assignmentName : ar[0].name, 
      assignmentDateDue: ar[0].date,
      assignmentNotice: ar[0].notice,
    })
  }

  //exam marks for next screen
  async getExamMarks() {
    let data = this.state.DBdata.timetableSlot.items[this.state.keyVal].subject.exam.items
    let ar = []
    for (let index = 0; index < data.length; index++) {
      let r={
        name: data[index].name,
        maxMarks: data[index].marks.items[0].maxMarks,
        marksObt: data[index].marks.items[0].marksObtained,
        type: data[index].marks.items[0].type,
        subjectCode: data[index].marks.items[0].subjectCode,
        date: data[index].dueDate,
      }
      ar.push(r)
    }
    this.setState({exaArray: ar})
    console.log("exaArray", this.state.assArray)
  }


  handleExam(){
    console.log("Go to Exam Page")
    Actions.push('quizIntro',{
      username:this.state.username,
      examId: this.state.examId,
      subjectName: this.state.subjectName, 
      subjectCode: this.state.subjectCode,
      subjectId: this.state.subjectId,
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
      assignId:this.state.assignId
    } )
  }

  async upNotice(data){
    await API.graphql(graphqlOperation(updateSubject, {input:{id:this.state.subjectId,notice:this.state.upNote}}));
    this.noticeInput.clear()
  }

  handleMarks(){
    console.log("go to Marks")
    let marksArray = this.state.assArray.concat(this.state.exaArray)
    console.log("pushing marks array",marksArray)
    Actions.push('marks',{
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
      subjectCode: this.state.subjectCode
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
    <TouchableOpacity onPress={()=> Actions.pop()}>
    <Svg width={width*0.092} style={{marginTop:"-40%"}} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    
    
    </View>
    
    <View style={{height:height*0.4,marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.055,
        "textAlign": "center",
        "color": "#9E9A35"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.03,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text>
       
    <View style={{flexDirection:"row",marginTop:"15%",justifyContent:"space-evenly"}}>
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
    } > Marks</Text>
    </View>

      </View>
    
    </TouchableOpacity>
    
    </View>
    </View>
    <View style={{height:"30%",marginTop:"5%",alignItems:"center"}}>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "left",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Notice </Text>
    <TouchableOpacity  style={{width:width*0.4}}>
      <Text style = {
      { 
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.028,
        "textAlign": "right",
        "textAlignVertical":"center",
        "color": "#9E9A35"
      }
    } >
        Edit
      </Text>
    </TouchableOpacity>
    </View>
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
    <TextInput clearButtonMode={"always"} ref={input => { this.noticeInput = input }} multiline={true} placeholder={this.state.subjectNotice} onChangeText={(text)=>this.setState({upNote:text})} style = {
      {
        "fontFamily": "Poppins",
        "fontWeight": "400",
        "fontSize": height*0.02,
        "color": "rgba(67, 81, 111, 255)",
        "textAlign":"center"
      }
    } />
    </View>

    <TouchableOpacity onPress= {()=> this.handleGoToAss()} style={{marginTop:"3%"}}>
    <View style = {
      {
        "alignItems": "center",
        "width": 200,
        "justifyContent":"center",
        "height": 50,
        "borderRadius": 0,
        "backgroundColor": "#9E9A35"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "paddingTop":"2%",
        "fontSize": width*0.03,
        "textAlign": "center",
        "textAlignVertical":"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > View Assignment </Text>
    </View>
    </TouchableOpacity>
    </View>
    
    </View>
    );
  };
};
export default Subject ;