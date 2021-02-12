import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';

import { API, graphqlOperation } from 'aws-amplify';
import { getFacultyByUsername, getStudentByUsername, getSubjectByCode } from '../graphql/queries.js';
import { showMessage, hideMessage } from "react-native-flash-message";

import { max } from 'react-native-reanimated';
import DropDownPicker from 'react-native-dropdown-picker';
import { createAssignment, createMarks } from '../graphql/mutations.js';

 
const {width, height} = Dimensions.get('window');


class MakeAssignment extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP: {},
      subjectName:"",
      subjectCode: "",
      username: global.QUNA,
      date:null,
      name:null,
      duration:null,
      questions:null,
      maxMark:null,
      notice:null,
      start:null,
      subjects:[],
      end:null,
      Sid: null
    };
  };

  async loadSub(){
    let moF1 = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    let arr=new Set()
    for(var i=0;i<moF1.data.getFacultyByUsername.timetableSlot.items.length;i++){
      arr.add(moF1.data.getFacultyByUsername.timetableSlot.items[i].subject.subjectCode)
    }
    console.log(arr,"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii ra")
    let temp=Array.from(arr)
    let q=[]
    for(var i=0;i<temp.length;i++){
        let r= {
          label: temp[i],
          value: temp[i],
        }
        q.push(r)
    }
    this.setState({subjects:q})
  }


  async componentDidMount(){
    console.log("inside Quizz")
    this.loadSub();
  }


  async defaultDisp(data){
   var Sub = await API.graphql(graphqlOperation(getSubjectByCode, {subjectCode: data}));
   await this.setState({subjectCode:data, Sid: Sub.data.getSubjectByCode.id})
   console.log(data)
  }

  async create(){
    if(this.state.date==null||this.state.name==null||this.state.maxMark==null){
      showMessage({
        message: "Fields Cannot Be Empty!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
    else{
      this.dateInput.clear()
      this.nameInput.clear()
      this.markInput.clear()
      this.noticeInput.clear()
      await API.graphql(graphqlOperation(createAssignment, {input:{
        name: this.state.name,
        notice: this.state.notice,
        date: this.state.date,
        assignmentSubjectId: this.state.Sid,
      }}));
      showMessage({
        message: "Assignment posted!",
        autoHide:true,
        duration:1800,
        type: "success",
      });
    }

  }

  startQuiz(){
    console.log("Exam Start")
    if(this.state.date==null||this.state.duration==null||this.state.name==null||this.state.maxMark==null||this.state.questions==null){
      showMessage({
        message: "Fields Cannot Be Empty!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
    else{
      this.dateInput.clear()
      this.nameInput.clear()
      this.durInput.clear()
      this.markInput.clear()
      this.quesInput.clear()
      this.create()
    }
  }


  
  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": width*0.092,
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:"100%",
        height:height*0.15
      }
    } >
    <TouchableOpacity onPress={()=> Actions.pop()}>
    <Svg width={width*0.092} style={{marginTop:"-40%"  }} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>

    </View>
    <DropDownPicker
    
    items={this.state.subjects}
    containerStyle={{height: 50, width:150}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.defaultDisp(item.value)}
/>
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <TextInput clearButtonMode={"always"} ref={input => { this.dateInput = input }} onChangeText={(text)=>this.setState({date:text})} placeholder="Date(DD-MM-YYYY)" style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.8,
        "textAlign": "center",
        "color": "#43516F",
        "marginTop": 9
      }
    } />
    </View> 
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <TextInput clearButtonMode={"always"} ref={input => { this.noticeInput = input }} onChangeText={(text)=>this.setState({notice:text})} placeholder="Notice" style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.8,
        "textAlign": "center",
        "color": "#43516F",
        "marginTop": 9
      }
    } />
    </View> 
    <View style={{flexDirection:"row",marginTop:"2%"}}>
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <TextInput clearButtonMode={"always"} ref={input => { this.nameInput = input }} onChangeText={(text)=>this.setState({name:text})} placeholder={"Name"} style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.8,
        "textAlign": "center",
        "color": "#43516F"
      }
    } /></View>
    </View>
    <View style={{flexDirection:"row",marginTop:"2%"}}>
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"5%",
        "marginHorizontal":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <TextInput clearButtonMode={"always"} ref={input => { this.markInput = input }} keyboardType = 'numeric' onChangeText={(text)=>this.setState({maxMark:text})} placeholder={"Max.Marks"} style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.8,
        "textAlign": "center",
        "color": "#43516F"
      }
    } /></View>
    </View>
    <View style={{flexDirection:"row",marginTop:"2%"}}>
    </View>
    
    <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>this.create()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"9%",
        "width": width*0.3,
        "height": width*0.135,
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
    } > Post </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>
    </View>
    
    </View>
  );
};
};
export default MakeAssignment;