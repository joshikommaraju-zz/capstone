import React, { Component }  from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
  BackHandler,
  DrawerLayoutAndroidBase
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message";
import * as Progress from 'react-native-progress';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { render } from 'react-dom';
import { a } from 'aws-amplify';
import { YellowBox } from 'react-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const {width, height} = Dimensions.get('window');

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);





class M_QuizMain extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP: {},
      Q: [],
      userID: '',
      examID: '',
      time: null,
      subjectCode: "",
      subjectName: "",
      answers:{},
      username: global.username,
      Question:"",
      Options: [],
      sel: "",
      Qno: null,
      marks: 0,
    };
  }
  timeCount = this.props.time
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    //passing params
    let paper = await this.props.QP;
    let SN = await this.props.subjectName;
    let SC = await this.props.subjectCode;
    let usID = await this.props.userID;
    let exID = await this.props.examID;

    this.setState({Q: paper.questions})
    console.log("paper",paper);
    this.setState({QP: paper, subjectCode:SC, subjectName:SN,userID: usID, examID: exID});
    console.log("paper time:",this.timeCount)
    for (let index = 1; index <= paper.questions.length; index++) {
      await AsyncStorage.removeItem("Q"+index);
    }
    this.QuestionMode(1);
    setTimeout(()=>this.handleSubmit(), this.timeCount*1000)
  }

  async QuestionMode(l){
    try{
      let Q = await this.state.QP.questions[l-1].question;
      let O = await this.state.QP.questions[l-1].option;
      let se = await AsyncStorage.getItem("Q"+l);
      console.log("present Question",l)
      console.log("marked Answer",se)
      this.setState({Qno:l,Question:Q,Options:O,sel:se})
    }
    catch(error){
      console.log(error)
    }
  }

  async marks(){
    this.setState({marks: 0});
    for (let index = 1; index <= this.state.Q.length; index++) 
    {
      let se = await AsyncStorage.getItem("Q"+index);
      if(se != null){
        if(se === this.state.Q[index-1].correct){
          let m = (this.state.Q[index-1].marks);
          this.setState({marks: this.state.marks+m})
        }
      }
    }
    
  }

  async handleSubmit(){
    console.log("submit pressed");
    await this.marks();
    console.log("marks Obtained",this.state.marks)
    Actions.push('m_quizSummary',{M:this.state.marks,QP:this.state.QP,subjectCode:this.state.subjectCode,subjectName:this.state.subjectName})
    showMessage({
      message: "Mock Quiz Ended",
      autoHide:true,
      duration:3600,
      type: "success",
    });
  }

  async changeQ(){
    await this.QuestionMode(this.state.Qno)
  //for scroll view buttons
  }

  async selAns(val){
    this.setState({sel: String(val)});
    await AsyncStorage.setItem("Q"+this.state.Qno,String(val));
   console.log("selected ans","Q"+this.state.Qno,this.state.sel)
  }


  async prevQ(){
    console.log("prev pressed")
    let val = await (this.state.Qno);
    if(val>1)
    {
      val=val-1;
      console.log("val",val);
    this.setState({Qno: val });
    this.changeQ();
    }
    else{
      showMessage({
        message: "No more Questions",
        autoHide:true,
        duration:700,
        type: "success",
      });
      console.log("underflow")
      //prompt("end of paper");
    }
  }

  async nextQ(){
    console.log("next pressed");
    let val = await (this.state.Qno);
    if((val)<this.state.QP.questions.length)
    {
      val=val+1;
      console.log("val",val);
    this.setState({ Qno: val });
    this.changeQ();
    }
    else{
      showMessage({
        message: "End of Questions!",
        autoHide:true,
        duration:700,
        type: "success",
      });
      console.log("overflow")

      //prompt("First of paper");
    }
  }

  exit(){
    Alert.alert(
      'Are you sure?',
      'You cannot enter test again, your marks will be submitted',
      [
        {
          text: 'Yes Exit',
          onPress: () => this.handleSubmit()
        },
        {
          text: 'No, Continue',
          onPress: () => console.log('Continue'),
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
  }

  
  

  render(){

  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": height*0.05,
        "flexDirection":"row",
        paddingLeft:"10%",
        paddingRight:"10%",
        width:width,
        height:height*0.15
      }
    } >
    <TouchableOpacity onPress={()=> this.exit()}>
    <Svg width={height*0.052} height={height*0.052} viewBox="0 0 30 30">
    <Path fill="#43516f" d="M13.53,2.238c-0.389-0.164-0.844,0.017-1.01,0.41c-0.166,0.391,0.018,0.845,0.411,1.01
								c2.792,1.181,4.598,3.904,4.6,6.937c0,4.152-3.378,7.529-7.53,7.529c-4.151,0-7.529-3.377-7.529-7.529
								C2.469,7.591,4.251,4.878,7.01,3.683C7.401,3.515,7.58,3.06,7.412,2.67c-0.17-0.392-0.624-0.571-1.014-0.402
								c-3.325,1.44-5.472,4.708-5.47,8.327c0,5.002,4.069,9.071,9.071,9.071c5.003,0,9.073-4.07,9.073-9.071
								C19.07,6.939,16.895,3.659,13.53,2.238z"/>
							<Path fill="#43516f" d="M9.999,7.616c0.426,0,0.771-0.345,0.771-0.771v-5.74c0-0.426-0.345-0.771-0.771-0.771
								c-0.427,0-0.771,0.345-0.771,0.771v5.74C9.228,7.271,9.573,7.616,9.999,7.616z"/>
    </Svg>
    </TouchableOpacity>
    <View style={{marginTop:"-5%"}}>
      <CountdownCircleTimer
        size={height*0.085}
        strokeWidth={5}
        onComplete={() =>{
          console.log("time up")
          return [false] // repeat animation in 1.5 seconds
        }}
        isPlaying
        duration={this.timeCount}
        colors={[["#3fdf64",0.7],["#eb5f5f",0.3]]}
      >
         {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{fontSize:height*0.02,color:"rgba(67, 81, 111, 255)"}}>
            {(remainingTime>60)?parseInt(remainingTime/60)+"m":remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
    </View>
    
    <View style={{height:"50%",marginTop:"2%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Question {this.state.Qno} </Text>
    <View style={{flexDirection:"row",marginTop:"3%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.025,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.Question} </Text>
    </View>
    <View style={{flexDirection:"column",marginTop:"5%"}}>

    {this.state.Options.map((item,key)=>(
      <TouchableOpacity onPress ={()=>this.selAns(key+1)} style = { 
        (key+1 != this.state.sel)?
        {
          "alignItems": "flex-start",
          "width": width*0.814,
          "height": height*0.0813,
          "marginTop":"3%",
          "borderRadius": 15,
          "backgroundColor": "rgba(233, 237, 241, 255)"
        } 
        : 
        {
          "alignItems": "flex-start",
          "width": width*0.814,
          "height": height*0.0813,
          "marginTop":"3%",
          "borderRadius": 15,
          "backgroundColor": "rgba(60, 114, 219, 255)"
        } 
      } >
      <Text style = {
        (key+1 != this.state.sel)?
        {
          "fontFamily": "Poppins-Medium",
          "padding":"5%",
          "textAlign": "left",
          "fontSize": height*0.025,
          "color": "rgba(67, 81, 111, 255)"
        }
        :
        {
          "fontFamily": "Poppins-Medium",
          "padding":"5%",
          "textAlign": "left",
          "fontSize": height*0.025,
          "color": "rgba(255, 255, 255, 255)"
        }

      } > {key+1}.  {item} </Text>
      </TouchableOpacity>
    ))}
    </View>
    
    <View style={{flexDirection:"row",marginTop:"3%",justifyContent:"space-around"}}>
    <TouchableOpacity onPress={()=> this.prevQ()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"8%",
        "width": width*0.25,
        "height": height*0.065,
        "borderRadius": 30,
        "backgroundColor": "#43516F"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.025,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Prev </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    <TouchableOpacity onPress ={()=> this.nextQ()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"8%",
        "width": width*0.25,
        "height": height*0.065,
        "borderRadius": 30,
        "backgroundColor": "rgba(60, 114, 219, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.025,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)",
      }
    } > Next </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    
    </View>
    
    <View style={{alignItems:"center",width:"80%",justifyContent:"center",flexDirection:"row",marginTop:"3%",marginLeft:"auto",marginRight:"auto"}}>
    <View style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
    
    <ScrollView horizontal={true} centerContent={true} nestedScrollEnabled={true} centerContent={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{"flexDirection":"row","alignItems":"center","marginTop": "3%","justifyContent":"space-around"}}>
    <View style = {
      {
        marginHorizontal:10
      }
    } >
    </View>

    {this.state.Q.map((item,key)=>(
      <TouchableOpacity onPress={()=>this.QuestionMode(key+1)} style = {
      {
        "alignItems": "center",
        "width": 30,
        "height": 30,
        "borderRadius": 5,
        "padding":"2%",
        "borderWidth": 1,
        "marginHorizontal":10,
        "borderColor": "rgba(63, 223, 100, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)"
      }
    } > {key+1} </Text>
    </TouchableOpacity>
    ))}

    <View style = {
      {
        marginHorizontal:10
      }
    } >
    </View>
    </ScrollView>
    </View>   
    </View>   
    </View> 
    </View>
  );
  };
};

export default M_QuizMain;