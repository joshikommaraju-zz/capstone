import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  render,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { API, graphqlOperation } from 'aws-amplify';
import { getSubject } from '../graphql/queries.js';
import { getFacultyByUsername, getStudentByUsername, getSubjectByCode } from '../graphql/queries.js';
import { updateMarks } from '../graphql/mutations.js';
import DropDownPicker from 'react-native-dropdown-picker';

import { Dimensions } from 'react-native';
 
const {width, height} = Dimensions.get('window');
//data pattern data[0] ={name:Assignment 1, Date: 22ndAug, maxMarks: '75', marksObt: '15'}

class Marks extends Component  {
  constructor(props) {
    super(props);
    this.state={
      assArr: [],
      subject: "",
      subjectName: "",
      subjectCode: "",
      username: "",
      country:null,
      studentList:[],
      changeMark:null,
      changeMark2:null,
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
    console.log("inside marks")
    let suNa = await this.props.subjectName
    let suCo = await this.props.subjectCode
    let usNa = await this.props.usNa
    let assArr = await this.props.data
    this.setState({
      username: usNa,
      subjectName: suNa,
      assArr: assArr,
      subjectCode:suCo})   
      console.log("assArr",this.state.assArr) 
    this.getStudenData(this.props.subjectCode);
  }

  
  async getStudenData(code){
    console.log(this.state.subjectCode)
    var fac = await API.graphql(graphqlOperation(getSubjectByCode, {subjectCode: code}));
    let temp=[]
    for(var i=0;i<fac.data.getSubjectByCode.classSection.students.items.length;i++){
      let r= {
        label: fac.data.getSubjectByCode.classSection.students.items[i].username ,
        value: fac.data.getSubjectByCode.classSection.students.items[i].username
      }
      temp.push(r)
    }
    this.setState({studentList:temp})
    console.log("List-Student @!!!!",this.state.studentList);
  }
  
  async postMarks(markData){
    console.log(this.state.changeMark,markData.type,"Howleyyyyyyyyyyyyyyyyy")
    let updateObj= await API.graphql(graphqlOperation(updateMarks, {input:{id:markData.id,marksObtained:this.state.changeMark,maxMarks: this.state.changeMark2}}));
    this.setState({changeMark2:null, changeMark:null})
  }
  
  async getAssData(){
    var fac = await API.graphql(graphqlOperation(getStudentByUsername, {username: this.state.country}));
    var ass=[]
      for(var i=0;i<fac.data.getStudentByUsername.classSection.subjects.items.length;i++){
      if(fac.data.getStudentByUsername.classSection.subjects.items[i].subjectCode==this.state.subjectCode){
        ass.push(fac.data.getStudentByUsername.classSection.subjects.items[i].assignment.items)
        ass.push(fac.data.getStudentByUsername.classSection.subjects.items[i].exams.items)
      }
    }
    ass=[]
    for(var i=0;i<fac.data.getStudentByUsername.marks.items.length;i++){
      if(fac.data.getStudentByUsername.marks.items[i].assignment==null){
        if(fac.data.getStudentByUsername.marks.items[i].exam.subject.subjectCode==this.state.subjectCode){
          ass.push(fac.data.getStudentByUsername.marks.items)
          console.log("Quiz")
        }
      }
      else if(fac.data.getStudentByUsername.marks.items[i].exam==null){
      if(fac.data.getStudentByUsername.marks.items[i].assignment.subject.subjectCode==this.state.subjectCode){
        ass.push(fac.data.getStudentByUsername.marks.items)
        console.log("Quiz Kadu",fac.data.getStudentByUsername.marks.items)
      }}
    }
    
    this.setState({assArr:ass})
  }
  async defaultDisp(usr){
    await this.setState({country:usr})
    console.log("Pick----------------------------------",this.state.country)
    
    this.getAssData()
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
        height:height*0.12
      }
    } >
    <TouchableOpacity onPress ={()=>Actions.pop()}>
    <Svg width={width*0.092} style={{marginTop:"-40%"  }} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    
    
    </View>
    
    <View style={{height:"20%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.055,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text> 
    </View>
    <DropDownPicker
    
    items={this.state.studentList}
    containerStyle={{height: 50, width:150}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.defaultDisp(item.value)}
/>
    <ScrollView showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{flexGrow:1,height:"30%",width:"100%",paddingLeft:"10%"}} horizontal={true}>
        {(this.state.assArr.length > 0 )?    
        //true (if marks are available)    


        this.state.assArr.map((data,key1)=> (
          <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
          <View style={{"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.73,"height": height*0.35,"borderRadius": 25,"backgroundColor": "#FFF",
            shadowColor:"#000",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
            <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": width*0.045,"color": "#43516F","width":"90%","marginTop": "10%"}} >
             {(data[key1].type=="Quiz")?data[key1].exam.name:data[key1].assignment.name}
            </Text>
            <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": width*0.045,"color": "#43516F","width":"90%","marginTop": "2%","marginTop":"2%"}} >
              {data[key1].date}
            </Text>
            <View style={{alignItems:"flex-start",justifyContent:"center",flexDirection:"row"}}>
              <View style={{"flexDirection":"column","alignItems":"flex-start","marginTop": "7%","justifyContent":"space-around"}}>
                <View style={{flexDirection:"row",marginBottom:"5%",marginRight:"20%",width:"80%",alignItems:"center", justifyContent:"space-around"}}>
                <TouchableWithoutFeedback>
                <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
                  <TextInput onChangeText={(text)=>this.setState({changeMark: text})} placeholder={data[key1].marksObtained.toString()} keyboardType = 'numeric' style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                  </TextInput>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
                  <TextInput onChangeText={(text)=>this.setState({changeMark2: text})} placeholder={data[key1].maxMarks.toString()} keyboardType = 'numeric' style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                  </TextInput>
                </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity onPress={()=>this.postMarks(data[key1])}>
                <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#3D73DD"}}>
                  <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#fff"}} >
                  Post
                  </Text>
                </View>
                </TouchableOpacity>
                </View>
              </View>
            </View>   
          </View>
          </View>
        ))



        :  
        //false (if no marks are available)



        <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
        <View style={{"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.73,"height": height*0.35,"borderRadius": 25,"backgroundColor": "#FFF",
          shadowColor:"#000",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
          <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": width*0.045,"color": "#43516F","width":"90%","marginTop": "10%"}} >
           No Marks Available
          </Text>   
        </View>
        </View> 

        }
        
      
      <View style={{marginRight:50}}></View>
    
    </ScrollView>
        

    
    </View>
  
  );
};
};
export default Marks;