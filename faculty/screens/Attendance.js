import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  render,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import DropDownPicker from 'react-native-dropdown-picker';
import { API, graphqlOperation } from 'aws-amplify';
import { getFacultyByUsername, getStudentByUsername, getSubjectByCode } from '../graphql/queries.js';
import { updateAttendance } from '../graphql/mutations.js';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state={
      keyVals: null,
      keyVal:null,
      keyValf: null,
      country: null,
      subject: "",
      subjectName: "",
      subjectCode: "",
      total: 0,
      studAtt:0,
      months: [["Jan", "Feb", "Mar", "Apr", "May", "Jun"],[ "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]],
      calendar: [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31]],
      attended: [[0,1,1,0,1,0,1],[1,0,0,1,1,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[0,0,0]] ,
      teachAttended: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0]] ,
      progress: '',
      username: global.username,
      date: new Date().getDate(),
      month:new Date().getMonth(),
      selMonth: null,
      keys1:null,
      keys2:null,
      studentList:[],
      moS:null,
      moFs:null,
      cheFac:[],
      monthAr:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]
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
    //console.log("data on prop",this.props.subjectName )
    let keVa = this.props.keVa
    let div= (this.state.attended.length/this.state.total)
    this.setState({keyVal:keVa, progress: div.toFixed(1), subjectCode: this.props.subjectCode})
    this.setState({subjectName: this.props.subjectName, subjectCode: this.props.subjectCode})
    this.getStudenData(this.props.subjectCode);
    var mon=new Date().getMonth()
    if(mon<=5){
      this.setState({keys1:0,keys2:mon})

    }
    else
    this.setState({keys1:1,keys2:(mon-6)})


  }

  _getOptionList() {
    return this.OPTIONLIST;
  }

  
  _canada(province) {

	this.setState({
      ...this.state,
      canada: province
    });
  }
  async checkKeyVal(dat){
    //console.log("NEne",n);
    for(let i=0;i<dat.data.getStudentByUsername.attendance.items.length;i++){
      if(dat.data.getStudentByUsername.attendance.items[i].subject.subjectCode===this.state.subjectCode){
        this.setState({keyVals:i})
        
      }
    }
  } 
  async getStudenData(code){
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
    
  }

  async checkKeyValf(moF1){
    //console.log("NEne",n);
    for(let i=0;i<moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items.length;i++){
      if(moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[i].subject.subjectCode==this.state.subjectCode){
        this.setState({keyValf:i})
        break;
      }
    }
  } 
  async defaultDisp(usr){
    await this.setState({country:usr})
    this.handleChangeMonth(this.state.keys1,this.state.keys2)

  }
  async handleUpdate(date){
    var dat = await API.graphql(graphqlOperation(getStudentByUsername, {username: this.state.country}));
    let attenData =await dat.data.getStudentByUsername.attendance.items[this.state.keyVals];
    let newArr
    switch(this.state.selMonth){
      case 0 : newArr=attenData.jan;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,jan:newArr}}));
      break;
      case 1 : newArr=attenData.feb;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,feb:newArr}}));
      break;
      case 2 : newArr=attenData.mar;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,mar:newArr}}));
      break;
      case 3 : newArr=attenData.apr;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,apr:newArr}}));
      break;
      case 4 : newArr=attenData.may;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,may:newArr}}));
      break;
      case 5 : newArr=attenData.jun;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,jun:newArr}}));
      break;
      case 6 : newArr=attenData.jul;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,jul:newArr}}));
      break;
      case 7 : newArr=attenData.aug;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,aug:newArr}}));
      break;
      case 8 : newArr=attenData.sep;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,sep:newArr}}));
      break;
      case 9 : newArr=attenData.oct;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,oct:newArr}}));
      break;
      case 10 : newArr=attenData.nov;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,nov:newArr}}));
      break;
      case 11 : newArr=attenData.dec;
      newArr[date-1]==1?newArr[date-1]=0:newArr[date-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:attenData.id,dec:newArr}}));
      break;
      default: alert("Something @ went Wrong");
    }

    if(this.state.selMonth<=5){
      var keys1=0 ,keys2=this.state.selMonth

    }
    else
    var keys1=1 ,keys2=this.state.selMonth-6
    this.handleChangeMonth(keys1,keys2)
  }

  async handleCount(attenData,moF1){
    let studAt = 0
    let facAt = 0
    for(let i =0; i<12;i++){
      let mn = this.state.monthAr[i]
      let mos = []
      let mf = []
      switch(mn){
        case "Jan" : mos=attenData.jan;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jan;
        break;
        case "Feb" : mos=attenData.feb;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].feb;
        break;
        case "Mar" : mos=attenData.mar;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].mar;
        break;
        case "Apr" : mos=attenData.apr;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].apr;
        break;
        case "May" : mos=attenData.may;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].may;
        break;
        case "Jun" : mos=attenData.jun;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jun;
        break;
        case "Jul" : mos=attenData.jul;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jul;
        break;
        case "Aug" : mos=attenData.aug;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].aug;
        break;
        case "Sep" : mos=attenData.sep;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].sep;
        break;
        case "Oct" : mos=attenData.oct;
        mf=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].oct;
        break;
        case "Nov" : mos=attenData.nov;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].nov;
        break;
        case "Dec" : mos=attenData.dec;
        mf=moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].dec;
        break;
        default: console.log("Something @ went Wrong");
      }
      if(i==this.state.selMonth){
        facAt = facAt+this.state.moFs
        for(let m=0;m<31;m++){
          if(this.state.cheFac.includes(m)){
            studAt = studAt+1
          }
        }
        continue;
      }
      for(let j=0; j<31; j++){
        facAt = facAt+mf[j]
        if(mf[j]==1 && mos[j]==1){
          studAt = studAt+1
        }
      }
    }
    await this.setState({studAtt: studAt,total: facAt})
  }

  async handleChangeMonth(key1,key2){
    let mn = this.state.months[key1][key2]
    let selmon = ((key1 ===0)? key2 : 6+key2 )
    mn= mn.toLowerCase()

    var dat = await API.graphql(graphqlOperation(getStudentByUsername, {username: this.state.country}));
    
    this.checkKeyVal(dat);
    //dat=JSON.parse(dat)
    let attenData =await dat.data.getStudentByUsername.attendance.items[this.state.keyVals];
    let moS
    let moF1 = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    let moF
    this.checkKeyValf(moF1);
    switch(mn){
      case "jan" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jan;
      moS=attenData.jan;
      break;
      case "feb" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].feb;
      moS=attenData.feb;
      break;
      case "mar" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].mar;
      moS=attenData.mar;
      break;
      case "apr" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].apr;
      moS=attenData.apr;
      break;
      case "may" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].may;
      moS=attenData.may;
      break;
      case "jun" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jun;
      moS=attenData.jun;
      break;
      case "jul" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].jul;
      moS=attenData.jul;
      break;
      case "aug" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].aug;
      moS=attenData.aug;
      break;
      case "sep" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].sep;
      moS=attenData.sep;
      break;
      case "oct" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].oct;
      moS=attenData.oct;
      break;
      case "nov" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].nov;
      moS=attenData.nov;
      break;
      case "dec" : moF=await moF1.data.getFacultyByUsername.timetableSlot.items[0].faculty.attendance.items[this.state.keyValf].dec;
      moS=attenData.dec;
      break;
      default: console.log("Something @ went Wrong");
    }
    let mcount = 0
    let chFac=[]
    for(let p=0; p<31;p++){
      if(moF[p]==1){
        if(moS[p]==1){
          chFac.push(p);
        }
      }
      mcount = mcount+moF[p]
    }
    this.setState({moS:attenData});
    let atten = [];
    while(moS.length) atten.push(moS.splice(0,7));
    

    this.setState({moFs:mcount,cheFac:chFac})
    //let moF = dat.classSection.subjects.items[this.state.keyVal].timetableSlots.items[0].faculty.timetableSlot.items[0].subject.classSection.subjects.items[this.state.keyVal].attendance[mn];
    let attenF = [];
    while(moF.length) attenF.push(moF.splice(0,7));
    this.setState({selMonth: selmon, teachAttended: attenF, attended: atten})
    this.handleCount(attenData,moF1)
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
    <TouchableOpacity onPress={()=>Actions.pop()}>
    <Svg width={width*0.092} style={{marginTop:"-40%"  }} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>Actions.push('utilities')}>
    <Svg width={width*0.092} height={width*0.092} viewBox="0 0 20 29">
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
    
    <View style={{height:height*0.8, alignItems:"center"}}>
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
    <DropDownPicker
    
    items={this.state.studentList}
    containerStyle={{height: 50, width:150}}
    style={{backgroundColor: '#fafafa',marginTop:9}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.defaultDisp(item.value)}
/>
    
    <View style={{flexDirection:"row",marginTop:"7%",justifyContent:"space-around"}}>
    <View style = {
      {
        "alignItems": "center",
        "marginHorizontal":"5%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Total </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(60, 114, 219, 255)",
        "marginTop": 10
      }
    } > {this.state.total} </Text>
    </View>
    <View style = {
      {
        "alignItems": "center",
        "marginHorizontal":"5%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attended </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)",
        "marginTop": 10
      }
    } > {this.state.studAtt} </Text>
    </View>
    
    </View>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.055,
        "marginTop":"5%",
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attendance Log </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "marginTop":"2%"
      }
    } >
      {this.state.months.map((item,key1)=>(
      <View style = {
        {
          flexDirection: 'row',
          alignItems: 'flex-start'
        }
      } > 
      {item.map((item2,key2)=>(
        <View>
        <TouchableOpacity onPress = {()=> this.handleChangeMonth(key1,key2)}><Text 
        style = {(item2==this.state.monthAr[this.state.selMonth])?
          {
            "fontFamily": "Poppins-Medium",
            "fontSize": width*0.035,
            "textAlign": "center",
            "marginHorizontal":"2%",
            "color": "rgba(60, 114, 219, 255)"
          }:{
            "fontFamily": "Poppins-Medium",
            "fontSize": width*0.035,
            "textAlign": "center",
            "marginHorizontal":"2%",
            "color": "rgba(67, 81, 111, 255)"
          }
        } > {item2} </Text></TouchableOpacity>
        </View>
      ))}
      </View>
    ))}


    <View style = {
      {
        "alignItems": "center",
        "marginTop":"2%"
      }
    } >


{this.state.calendar.map((data,key)=> (

    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "marginTop":"3%"
      }
    } >
  {data.map((data2,key2)=> ( 
    <TouchableOpacity onPress={()=>this.handleUpdate(data2)}>
    <View style = {
      {
        "alignItems": "center"
      }
    } >
    <View style = {
      this.state.selMonth==this.state.month?
      this.state.date>=data2?
      this.state.teachAttended[key][key2]==1?
      this.state.attended[key][key2]==1?
      {
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "rgba(63, 223, 100, 255)"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#eb5f5f"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#43516f"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#c8cacc"
      }:this.state.selMonth<this.state.month?
      this.state.teachAttended[key][key2]==1?
      this.state.attended[key][key2]==1?
      {
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "rgba(63, 223, 100, 255)"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#eb5f5f"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#43516F"
      }:{
        "alignItems": "center",
        "paddingTop": 2,
        "width": width*0.076,
        "height": height*0.0407,
        "borderRadius": 5,
        "borderWidth": 1,
        "marginHorizontal":"2%",
        "borderColor": "#c8cacc"
      }
    } >
    <Text style = {
      this.state.selMonth==this.state.month?
      this.state.date>=data2?
      this.state.teachAttended[key][key2]==1?
      this.state.attended[key][key2]==1?
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#eb5f5f"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#43516f"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#c8cacc"
      }:this.state.selMonth<this.state.month?
      this.state.teachAttended[key][key2]==1?
      this.state.attended[key][key2]==1?
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#eb5f5f"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#43516F"
      }:{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.035,
        "textAlign": "center",
        "color": "#c8cacc"
      }
    } > {data2} </Text>
    </View>
    </View>
    </TouchableOpacity>

  ))}    
    </View>
))}

   
    </View>
    </View>
    </View>
    </View>
  );
};
};
export default Attendance;