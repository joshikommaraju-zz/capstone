import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

class QuizIntro extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP: {},
      subjectName:"",
      subjectCode: "",
      userID: '',
      examID: '',
      username: global.userId,
      flag: 0,
    };
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    console.log("inside Quizz")
    var dat = this.props.quizzJSON;
    //console.log("after import",dat)
    AsyncStorage.setItem("@QuizPaper",JSON.stringify(dat));
    //var QP = await AsyncStorage.getItem("@QuizPaper")
    await this.setState({subjectName:this.props.subjectName, subjectCode:this.props.subjectCode,userID: this.props.userID, examID: this.props.examID,QP: dat});
    //console.log("state",this.state)
    console.log("after Export",this.state.QP.questions.length)
    let DBd = await AsyncStorage.getItem("@DBdata")
    let DBdata = JSON.parse(DBd)
    let markD = DBdata.marks
    for (let index = 0; index < markD.items.length; index++) {
      let per = markD.items[index]
      if(per.assignment == null){
        console.log("assignment nulls")
        if(per.exam.subject.subjectCode == this.state.subjectCode){
          //console.log("subject code match")
          //console.log("xeam name", per.exam.name)
          if(per.exam.id == this.state.examID){
            flag = 1;
            break;
          }
          else{
            flag =0;
          }
        }
      }
    }
    await this.setState({flag: flag})
    console.log("flag", flag)
  }

  startQuiz(){
    if(this.state.flag == 1){
      showMessage({
        message: "it appears that you have already taken the exam!; You cannot proceede",
        autoHide:true,
        duration:3600,
        type: "danger",
      });
    }
    else{
      let today = new Date()
      let thisYear = today.getFullYear()
      let thisMonth = today.getMonth() +1
      let thisDay = today.getDate()
      let endTime = this.state.QP.endtime.split(':')
      let du = (((parseInt(endTime[0])- today.getHours())*60 )+(parseInt(endTime[1]) - today.getMinutes()))
      let Qd = this.state.QP.date.split('-')
      console.log(thisDay,thisMonth,thisYear)
      //console.log("du",du)
      //console.log(Qd)
      if(thisYear == parseInt(Qd[2]) && thisMonth == parseInt(Qd[1]) && thisDay == parseInt(Qd[0])){
        if(du>0){
          console.log("Exam Start")
          let timeI = (du*60)
          Actions.push('quizMain',{
            QP:this.state.QP,
            subjectName:this.state.subjectName, 
            subjectCode:this.state.subjectCode,
            time: timeI,
            userID: this.state.userID,
            examID: this.state.examID,
          })
        }
        else{
          if(du<0)
          showMessage({
            message: "times up!!",
            autoHide:true,
            duration:3600,
            type: "danger",
          });
          if(du>0)
          showMessage({
            message: "Quizz not started yet!",
            autoHide:true,
            duration:3600,
            type: "danger",
          });
        }
      }
      else{
        showMessage({
          message: "plese be back on actual test timing!!",
          autoHide:true,
          duration:3600,
          type: "danger",
        });
      }
    }
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
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > Date: {this.state.QP.date} </Text>
    <View style={{flexDirection:"row",marginTop:"15%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > Name: </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > {this.state.QP.heading} </Text>
    </View>
    <View style={{flexDirection:"row",marginTop:"5%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > Start time: </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > {this.state.QP.time} </Text>
    </View>
    
    <View style={{flexDirection:"row",marginTop:"5%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > Duration: </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > {this.state.QP.duration} Minutes </Text>
    </View>
    <View style={{flexDirection:"row",marginTop:"5%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > Questions: </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > {this.state.QP.totalQues} </Text>
    </View>
    
    <View style={{flexDirection:"row",marginTop:"5%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > Max. Marks: </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "#43516F"
      }
    } > {this.state.QP.totalmarks} </Text>
    </View>
    
    <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>this.startQuiz()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"9%",
        "width": 150,
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
    } > Start Test </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>
    </View>
    
    </View>
  );
};
};
export default QuizIntro;