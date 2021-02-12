import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { Storage } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
import { API, graphqlOperation } from 'aws-amplify';
import { getFacultyByUsername } from '../graphql/queries';
import DocumentPicker from 'react-native-document-picker';


import { Dimensions } from 'react-native';
 
const {width, height} = Dimensions.get('window');





class Home extends Component{
  constructor(props) {
    super(props);
    this.state={
      username: "",
      userData: {},
      DBdata: {},
      slots: [],
      userID: "",
      today : null,
      school: "",
      subjects:[],
      assignments:[],
    };
  }

  days = ["M","T","W","Th","F","S","Su"]

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    console.log("Home Screen Entered")
    let usNa = await AsyncStorage.getItem("@QUNA");
    let userData = await AsyncStorage.getItem("@userData");
    let data = JSON.parse(userData);
    this.setState({userData : data})
    global.QUNA = usNa
    console.log("username",global.QUNA)
    let td = new Date().getDay() - 1 ;
    const facData = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    let uuna = facData.data.getFacultyByUsername.facultyName.split(" ")
    usNa = uuna[uuna.length-1]

    let DBd = facData.data.getFacultyByUsername
    await this.setState({
      userID:DBd.id ,
      DBdata:DBd,
      username: usNa, 
      school:DBd.department.school.schoolName,
    })

    let s =[]
    let sety=new Set();

    let cardlen = DBd.timetableSlot.items.length
    for (let index = 0; index < cardlen; index++) {
      let ts =[]
      let tts = []
      for (let index2 = 0; index2 < DBd.timetableSlot.items[index].subject.timetableSlots.items.length; index2++) {
        ts.push(DBd.timetableSlot.items[index].subject.timetableSlots.items[index2])
        tts.push(DBd.timetableSlot.items[index].subject.timetableSlots.items[index2])
      }
      let slRen = []
      while(ts.length) slRen.push(ts.splice(0,3));

      let flagd =0;
      var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var day = today.getDay() - 1
      let PT = (hours*100)+minutes
      for(let element of ts){
        if(element.day == this.days[day])
        {
        //console.log("aubject name",element.subjectCode)
          let sT = element.time
          let eT = element.endtime
          let st = sT.split(" ")
          let et = eT.split(" ")
          let t1 = st[0].split(":")
          let t2 = et[0].split(":")
          let smi = parseInt(t1[1])
          let shi = null
          if(st[1] == "AM"){
            shi= parseInt(t1[0])
          } 
          else if (st[1] == "PM"){
            shi = parseInt(t1[0])
            if(shi!=12)
            {
              shi=shi+12
            }
          }
          let emi = parseInt(t2[1])
          let ehi = null
          if(et[1] == "AM"){
            ehi= parseInt(t2[0])
          } 
          else if (et[1] == "PM"){
            ehi = parseInt(t2[0])
            if(ehi != 12)
            ehi=ehi+12
          }
          let IT = (shi*100)+smi
          let ET = (ehi*100)+emi
          //console.log("IT",IT,"ET",ET,"PT",PT)
          if((PT>=IT) && (PT<ET)){
            flagd=1
          }
          else{
            flagd=0
          }
        }
      }
      console.log("final flag", flagd)
      let r ={
        flag: flagd,
        subName: DBd.timetableSlot.items[index].subject.subjectName,
        subCode: DBd.timetableSlot.items[index].subject.subjectCode,
        subNotice: DBd.timetableSlot.items[index].subject.notice,
        subId:DBd.timetableSlot.items[index].subject.id,
        roomlink: DBd.timetableSlot.items[index].conflink,
        slots: tts,
        slotsRen: slRen,
      }
      if(!sety.has(r.subCode)){
        s.push(r)
        sety.add(r.subCode)
      }
    }
    console.log(s)
    console.log(sety)
    this.setState({subjects: s,username: usNa, today: td});
    console.log("today", this.days[td])
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

  handeConf(data){
    console.log("go to conference")
    Actions.push('conference',{
      roomlink: data.roomlink,
      username:this.state.username,
      userID: this.state.userID, 
      classData:data
    })
  }

  handleCreateAssignment(){
    console.log("Create Assignment pushed")
    Actions.push('makeAssignment')
  }

  handleProfile = () =>{
    console.log("go to Profile page");
    Actions.push('profile',{DBdata: this.state.DBdata,subData: this.state.subjects})
  }

  handleUtilities = () =>{
    console.log("go to Notifications page");
    Actions.push('utilities',{DBdata: this.state.DBdata})
  }

    render(){

      return (
        
        <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column"}} >
        
         <View style = {
          {
            "alignItems": "flex-start",
            "justifyContent":"space-between",
            "paddingTop": height*0.06,
            "flex": 1,
            "flexDirection":"row",
            paddingLeft:"10%",
            paddingRight:"10%",
            width:width,
            height:height
          }
        } >
       
        
        </View>
        
         <View style={{alignItems:"flex-start",height:height*0.1, width:width, paddingLeft:"10%"}}>
        <Text>
        <Text style = {
          {
            "fontFamily": "Poppins-Regular",
            "textAlign":"left",
            "fontSize": height*0.027,
            "color": "rgba(102, 107, 117, 255)"
          }
        } > Hello, </Text>
        <Text style={{"fontFamily":"Poppins-Medium","fontSize":height*0.035,"color":"#9E9A35"}}>{this.state.username}</Text >
        </Text>
        </View>
        <View style={{height:height*0.7,width:width,justifyContent:"space-around"}}>
        <ScrollView showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{flexGrow:1,height:"65%",width:"100%",paddingLeft:"10%"}} horizontal={true}>
          {this.state.subjects.map((data,key)=>(
          
          <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
            <View style={
              (data.flag === 1)?
              {"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.76,"height": width*0.68,"borderRadius": 0,"backgroundColor": "rgba(61, 115, 221, 255)",shadowColor:"#3D73DD",shadowOffset: { width: 25, height: 4 },shadowOpacity:0.3, shadowRadius:48, elevation:8}
              :
              {"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.76,"height": width*0.68,"borderRadius": 0,"backgroundColor": "rgba(255, 255, 255, 255)",shadowColor:"#3D73DD",shadowOffset: { width: 25, height: 4 },shadowOpacity:0.3, shadowRadius:48, elevation:8}
    
              }>
             
              <TouchableOpacity 
                onPress={()=>Actions.push('subject',{ 
                  usNa: this.state.username,
                  sessions: data.slots,
                  subjectName: data.subName, 
                  subjectCode : data.subCode,
                  school:this.state.school,
                  suNo: data.subNotice,
                  class:this.state.DBdata.class,
                  suId: data.subId,
                  keVa: key,
                })}>
              
              <Text numberOfLines={1} style = {
                (data.flag === 1)?
                {"fontFamily": "Poppins-Medium","paddingLeft":"2%","fontSize": height*0.025,"color": "#FFF","width":"90%","marginTop": "10%"}
                :
                {"fontFamily": "Poppins-Medium","paddingLeft":"2%","fontSize": height*0.025,"color": "#9E9A35","width":"90%","marginTop": "10%"} 
              }>{data.subName}</Text>
              <Text style = {
                (data.flag === 1)?
                {"fontFamily": "Poppins-Medium","paddingLeft":"2%","fontSize": height*0.020,"color": "#FFF","width":"90%","marginTop": "2%","marginTop":"2%"}
                :
                {"fontFamily": "Poppins-Medium","paddingLeft":"2%","fontSize": height*0.020,"color": "#43516F","width":"90%","marginTop": "2%","marginTop":"2%"}
                }>{data.subCode}</Text>
              </TouchableOpacity>
              <View style={{height:60,alignItems:"flex-start",marginRight:"3%",marginRight:"3%",justifyContent:"space-around",flexDirection:"row"}}>
              
              </View>
              <View style={{alignItems:"flex-start",paddingLeft:"5%", marginTop:"10%", flexDirection:"row"}}>
                
                
              </View>
            </View>
          </View>
          ))}      
          <View style={{marginRight:30}}></View>
        
        </ScrollView>
        <View style={{paddingLeft:"10%", height:height*0.1}}>
          <Text style={{"fontFamily":"Poppins-Medium","marginTop":"3%","fontSize":height*0.03,"color":"rgba(67, 81, 111, 255)"}}>Assignment</Text >
        </View>
        <View style={{height:height*0.2,marginTop:"-10%",alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity onPress={()=> this.handleCreateAssignment()} style={{marginTop:"10%"}} contentContainerStyle={{alignItems:"center", justifyContent: "center"}}>
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
          "fontSize": 14,
          "textAlign": "center",
          "textAlignVertical":"center",
          "color": "rgba(255, 255, 255, 255)"
        }
      } > Create Assignment </Text>
      </View>
      </TouchableOpacity>
        </View>
        
        </View>
        </View>
    
      )
    };
    };
    
    export default Home;