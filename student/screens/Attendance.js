import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  render,
  BackHandler
} from 'react-native';
import { Dimensions } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { getFaculty } from '../src/graphql/queries';

const {width, height} = Dimensions.get('window');

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state={
      keyVal: null,
      keyValf: null,
      subject: "",
      subjectName: "",
      subjectCode: "",
      total: 15,
      studAtt: null,
      months: [["Jan", "Feb", "Mar", "Apr", "May", "Jun"],[ "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]],
      calendar: [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31]],
      attended: [[0,1,1,0,1,0,1],[1,0,0,1,1,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[0,0,0]] ,
      teachAttended: [[0,0,0,0,0,0,0],[1,0,0,1,1,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[1,1,1]] ,
      progress: '',
      username: global.username,
      date: new Date().getDate(),
      month:new Date().getMonth(),
      selMonth: null, 
      facData: {},
      monthAr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]
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
    this.setState({
      keyVal:keVa,  
      subjectCode: this.props.subjectCode,
      total:this.props.total,
      studAtt: this.props.studAtt,
      progress: this.props.progress,
      facData: this.props.facData

    })
    this.setState({subjectName: this.props.subjectName, subjectCode: this.props.subjectCode})
    
    let pm=new Date().getMonth();
    if(pm<=5)
    this.handleChangeMonth(0,pm)
    else
    this.handleChangeMonth(1,pm-6)
  }

  async handleChangeMonth(key1,key2){
    let fd = await this.state.facData
    let mn = await this.state.months[key1][key2]
    let selmon = ((key1 ===0)? key2 : 6+key2 )
    mn= mn.toLowerCase()
    console.log("selected month:",selmon, mn)
    //get student data
    var dat = await AsyncStorage.getItem("@DBdata")
    dat = JSON.parse(dat)
    //get faculty data
    var fdat = await AsyncStorage.getItem("@FData")
    fd = JSON.parse(fdat)
    
    let index = 0
    for (index =0; index < dat.attendance.items.length; index++) {
      if (dat.attendance.items[index].subject.subjectCode == this.state.subjectCode){
        break
      }
    }

    //student
    let moS= []
    switch(mn){
      case "jan" : moS=dat.attendance.items[index].jan;
      break;
      case "feb" : moS=dat.attendance.items[index].feb;
      break;
      case "mar" : moS=dat.attendance.items[index].mar;
      break;
      case "apr" : moS=dat.attendance.items[index].apr;
      break;
      case "may" : moS=dat.attendance.items[index].may;
      break;
      case "jun" : moS=dat.attendance.items[index].jun;
      break;
      case "jul" : moS=dat.attendance.items[index].jul;
      break;
      case "aug" : moS=dat.attendance.items[index].aug;
      break;
      case "sep" : moS=dat.attendance.items[index].sep;
      break;
      case "oct" : moS=dat.attendance.items[index].oct;
      break;
      case "nov" : moS=dat.attendance.items[index].nov;
      break;
      case "dec" : moS=dat.attendance.items[index].dec;
      break;
      default: console.log("Something @ went Wrong");
    }
    let atten = [];
    while(moS.length) atten.push(moS.splice(0,7));

    //faculty
    let findex = 0
    for (findex =0; findex < fd.attendance.items.length; findex++) {
      if (fd.attendance.items[findex].subject.subjectCode == this.state.subjectCode){
        break
      }
    }
    let moF= []
    switch(mn){
      case "jan" : moF=fd.attendance.items[findex].jan;
      break;
      case "feb" : moF=fd.attendance.items[findex].feb;
      break;
      case "mar" : moF=fd.attendance.items[findex].mar;
      break;
      case "apr" : moF=fd.attendance.items[findex].apr;
      break;
      case "may" : moF=fd.attendance.items[findex].may;
      break;
      case "jun" : moF=fd.attendance.items[findex].jun;
      break;
      case "jul" : moF=fd.attendance.items[findex].jul;
      break;
      case "aug" : moF=fd.attendance.items[findex].aug;
      break;
      case "sep" : moF=fd.attendance.items[findex].sep;
      break;
      case "oct" : moF=fd.attendance.items[findex].oct;
      break;
      case "nov" : moF=fd.attendance.items[findex].nov;
      break;
      case "dec" : moF=fd.attendance.items[findex].dec;
      break;
      default: console.log("Something @ went Wrong");
    }
    let attenF = [];

    while(moF.length) attenF.push(moF.splice(0,7));
    await this.setState({selMonth: selmon, teachAttended: attenF, attended: atten})
    //console.log("Student attended array without splice:",moS)
    console.log("Student attended array after splice:",this.state.attended)
    //console.log("Faculty attended array without splice:",moF)
    console.log("faculty attended array:",this.state.teachAttended)
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
    <TouchableOpacity onPress={()=>Actions.pop()}>
    <Svg width={width*0.092} style={{marginTop:"-40%"  }} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>Actions.utilities()}>
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
    
    <View style={{height:height*0.8,marginTop:"2%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.06,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.04,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text> 
    <TouchableOpacity>
    <View style={{alignItems:"flex-start",paddingLeft:"5%", marginTop:"5%", flexDirection:"row",marginLeft:"-5%"}}>
            <Progress.Bar progress={this.state.progress} width={width*0.35} height={height*0.01} borderRadius={20} color={'#3FDF64'} borderColor={'rgba(108, 92, 189,0)'} unfilledColor={'#E9EDF1'}>
            </Progress.Bar>
            <View style={{"alignItems":"center",marginTop:"-7%",marginLeft:"7%","justifyContent":"center","paddingTop": "2%","width": 40,"height": 40,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
              <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": width*0.03,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
              {this.state.progress*100}
              </Text>
            </View>
    </View>
    </TouchableOpacity>
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
        "fontSize": width*0.04,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Total </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.04,
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
        "fontSize": width*0.04,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attended </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": width*0.04,
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
        "fontSize": width*0.06,
        "marginTop":"10%",
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attendance Log </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "marginTop":"5%"
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
        style = {
          (item2==this.state.monthAr[this.state.selMonth])?
          {
            "fontFamily": "Poppins-Medium",
            "fontSize": width*0.03,
            "textAlign": "center",
            "marginHorizontal":"2%",
            "color": "rgba(60, 115, 219, 255)"
          }
          :
          {
            "fontFamily": "Poppins-Medium",
            "fontSize": width*0.03,
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