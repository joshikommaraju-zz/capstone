import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';
import { max } from 'react-native-reanimated';

import { showMessage, hideMessage } from "react-native-flash-message";

import { createExam } from '../graphql/mutations.js';
import { API, graphqlOperation } from 'aws-amplify';
import { addEventListener } from '@react-native-community/netinfo';


 
const {width, height} = Dimensions.get('window');

class QuizMain extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP: {},
      subjectName:"",
      subjectCode: "",
      examId:"",
      subjectId:"",
      username: global.username,
      date:null,
      name:null,
      duration:null,
      questions:null,
      maxMark:null,
      qno:[],
      q:[],
      option1:[],
      option2:[],
      option4:[],
      option3:[],
      ans:[],
      qMark:[],
      nMark:[],
      thisQ:null,
      thisqMark:null,
      thisnMark:null,
      thisAns:null,
      thisOpt1:null,
      thisOpt2:null,
      thisOpt3:null,
      thisOpt4:null,
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
    this.setState({subjectName:this.props.subjectName,date:this.props.date,subjectId:this.props.subjectId, subjectCode:this.props.subjectCode,examId:this.props.examId});
    console.log(this.props.Testname,"Oyyyyyyyyyyyyy")
    let temp=[]
    for(var i=1;i<=this.props.questions;i++){
      temp.push(i);
    }
    this.setState({qno:temp})
    this.setState({thisQ:1})
  }

  next(){
    this.addQ();
    this.setState({name:this.state.q[this.state.thisQ+1]})
    this.setState({thisQ:this.state.thisQ+1})
  }
  back(){
    this.addQ();
    this.setState({name:this.state.q[this.state.thisQ-1]})
    this.setState({thisQ:this.state.thisQ-1})
  }
  addQ(){
    let arr=this.state.q;
    arr[this.state.thisQ]=this.state.name;
    let otp1=this.state.option1;
    let otp2=this.state.option2;
    let otp3=this.state.option3;
    let otp4=this.state.option4;
    otp1[this.state.thisQ]=this.state.thisOpt1;
    otp2[this.state.thisQ]=this.state.thisOpt2;
    otp3[this.state.thisQ]=this.state.thisOpt3;
    otp4[this.state.thisQ]=this.state.thisOpt4;
    let ans=this.state.ans;
    ans[this.state.thisQ]=this.state.thisAns;
    let qMark=this.state.qMark;
    qMark[this.state.thisQ]=this.state.thisqMark;
    let nMark=this.state.nMark;
    nMark[this.state.thisQ]=this.state.thisnMark;
    this.setState({q:arr,option1:otp1,option2:otp2,option3:otp3,option4:otp4,ans:ans,qMark:qMark,nMark:nMark})
    console.log("Q",this.state.q)
    this.quInput.clear()
    this.op1Input.clear()
    this.op2Input.clear()
    this.op3Input.clear()
    this.op4Input.clear()
    this.ansInput.clear()
    this.markInput.clear()
    this.negInput.clear()
    
  }
  post(){
    this.addQ();
    var abc=""
    abc=abc+"{'subjectCode':'"+this.props.subjectCode+"','heading':'"+this.props.Testname+"','date':'"+this.props.date+"','time':'"+this.props.start+"','endtime':'"+this.props.end+"','totalmarks':'"+this.props.maxMark+"','totalQues':'"+this.props.questions+"','marknegative':'True','questions':["
    for(var i=1;i<=this.props.questions;i++){
      if(i!=this.props.questions)
      abc=abc+"{'question':'"+this.state.q[i]+"','option':['"+this.state.option1[i]+"','"+this.state.option2[i]+"','"+this.state.option3[i]+"','"+this.state.option4[i]+"'],'correct':'"+this.state.ans[i]+"','marks':"+this.state.qMark[i]+",'negmark':"+this.state.nMark[i]+"},"
      else
      abc=abc+"{'question':'"+this.state.q[i]+"','option':['"+this.state.option1[i]+"','"+this.state.option2[i]+"','"+this.state.option3[i]+"','"+this.state.option4[i]+"'],'correct':'"+this.state.ans[i]+"','marks':"+this.state.qMark[i]+",'negmark':"+this.state.nMark[i]+"}]}"

    }
    this.upPost(abc);
  }

  async upPost(data){
    await API.graphql(graphqlOperation(createExam, {input:{name:this.props.Testname,date:this.state.date,uploadJSON:data,examSubjectId:this.state.subjectId}}));
    Actions.popTo('subject')
  }


  
  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "center","justifyContent":"space-between","paddingTop": width*0.15,
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:"100%",
        height:height*0.09
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
    <Text style={{"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F","fontSize":width*0.055}}>Question {this.state.thisQ}</Text>
    <TouchableOpacity onPress={()=> Actions.pop()}>
    <Svg width={width*0.092} opacity={0} style={{marginTop:"-40%"  }} height={width*0.092} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>

    </View>
  
  <View style={{marginTop:"10%",justifyContent:"center",alignItems:"center"}}>
    <View style={{flexDirection:"row",marginHorizontal:width*0.01}}>
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.15,
        "borderRadius": 15,
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
   <TextInput clearButtonMode={"always"} ref={input => { this.quInput = input }} multiline={true} onChangeText={(text)=>this.setState({name:text})} style={{fontSize:width*0.05,textAlign:"center",padding:"5%",width:width*0.8,"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F"}} placeholder={"Enter Question"}  />
   </View>
   </View>
   <View style={{flexDirection:"row"}}>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "height": height*0.15,
        "borderRadius": 15,
        "marginHorizontal":"2%",
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } ><TextInput multiline={true} clearButtonMode={"always"} ref={input => { this.op1Input = input }} onChangeText={(text)=>this.setState({thisOpt1:text})} style={{fontSize:width*0.04,textAlign:"center",padding:"5%",width:width*0.35,"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F"}}  placeholder={"Enter Option 1"} />
   </View>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "marginHorizontal":"2%",
        "height": height*0.15,
        "borderRadius": 15,
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } ><TextInput multiline={true} clearButtonMode={"always"} ref={input => { this.op2Input = input }} onChangeText={(text)=>this.setState({thisOpt2:text})} style={{fontSize:width*0.04,textAlign:"center",padding:"5%",width:width*0.35,"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F"}} placeholder={"Enter Option 2"} />
   </View>
   </View>
   <View style={{flexDirection:"row"}}>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "marginHorizontal":"2%",
        "height": height*0.15,
        "borderRadius": 15,
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } ><TextInput multiline={true} clearButtonMode={"always"} ref={input => { this.op3Input = input }} onChangeText={(text)=>this.setState({thisOpt3:text})} style={{fontSize:width*0.04,textAlign:"center",padding:"5%",width:width*0.35,"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F"}} placeholder={"Enter Option 3"} />
   </View>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "marginHorizontal":"2%",
        "height": height*0.15,
        "borderRadius": 15,
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } ><TextInput multiline={true} clearButtonMode={"always"} ref={input => { this.op4Input = input }} onChangeText={(text)=>this.setState({thisOpt4:text})} style={{fontSize:width*0.04,textAlign:"center",padding:"5%",width:width*0.35,"fontFamily": "Poppins-Medium","textAlign": "center","color": "#43516F"}} placeholder={"Enter Option  4"} />
   </View>
   </View>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } ><TextInput clearButtonMode={"always"} ref={input => { this.ansInput = input }} keyboardType = 'numeric' onChangeText={(text)=>this.setState({thisAns:text})} placeholder={"Answer"} style={{
       "fontSize": width*0.045,
        "width":width*0.8,
        "fontFamily": "Poppins-Medium",
        "textAlign": "center",
        "color": "#43516F"
      }}/>
   
   </View>
   <View style={{flexDirection:"row"}}>
   <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "height": height*0.1,
        "borderRadius": 15,
        "marginHorizontal":"2%",
        "marginBottom":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
   <TextInput clearButtonMode={"always"} ref={input => { this.markInput = input }} keyboardType = 'numeric' onChangeText={(text)=>this.setState({thisqMark:text})} placeholder={"Mark"} style={{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.38,
        "textAlign": "center",
        "color": "#43516F"
      }}/></View>
      <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.38,
        "height": height*0.1,
        "borderRadius": 15,
        "marginBottom":"2%",
        "marginHorizontal":"2%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
   <TextInput clearButtonMode={"always"} ref={input => { this.negInput = input }} keyboardType = 'numeric' onChangeText={(text)=>this.setState({thisnMark:text})} placeholder={"Negative"} style={{
        "fontFamily": "Poppins-Medium",
        "fontSize": width*0.045,
        "width":width*0.38,
        "textAlign": "center",
        "color": "#43516F"
      }}/></View>
   </View>
  </View>
    
    {this.state.thisQ==1?this.props.questions==1?<View style={{flexDirection:"row",marginTop:"3%",justifyContent:"space-evenly"}}>
    
    <TouchableOpacity onPress={()=>this.post()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"3%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Submit </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>:<View style={{flexDirection:"row",marginTop:"3%",justifyContent:"space-evenly"}}>
    
    <TouchableOpacity onPress={()=>this.next()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"3%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Next </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>:
    this.state.thisQ!=this.props.questions?<View style={{flexDirection:"row",marginTop:"3%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>this.back()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Back </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.next()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"5%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Next </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>:<View style={{flexDirection:"row",marginTop:"3%",justifyContent:"space-evenly"}}>
    <TouchableOpacity onPress={()=>this.back()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"2%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Back </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.post()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"3%",padding:"2%"}}>
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
        "fontSize": width*0.045,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Submit </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>}
    </View>
    
    
   
  );
};
};
export default QuizMain;