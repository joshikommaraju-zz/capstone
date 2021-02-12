import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  DrawerLayoutAndroidBase
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

import { YellowBox } from 'react-native';
import { render } from 'react-dom';
import { a } from 'aws-amplify';
import AsyncStorage from '@react-native-community/async-storage';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);




class QuizMain extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP: {},
      Q: [],
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
 async componentDidMount(){
    let paper = await this.props.QP;
    let SN = await this.props.subjectName;
    let SC = await this.props.subjectCode;
    this.setState({Q: paper.questions})
    console.log("paper",paper);
    this.setState({QP: paper,subjectCode:SC,subjectName:SN});
    for (let index = 1; index <= paper.questions.length; index++) {
      await AsyncStorage.removeItem("Q"+index);
    }
    this.QuestionMode(1);
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
    for (let index = 1; index <= this.state.Q.length; index++) {
      let se = await AsyncStorage.getItem("Q"+index);
      if(se != null){
      if(se === this.state.Q[index-1].correct){
        let m = (this.state.Q[index-1].marks);
        this.setState({marks: this.state.marks+m})
      }
    }
    }
    console.log(this.state.marks)
  }

  async handleSubmit(){
    console.log("submit pressed");
    await this.marks();
    Actions.push('quizSummary',{M:this.state.marks,QP:this.state.QP,subjectCode:this.state.subjectCode,subjectName:this.state.subjectName})
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
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": 52,
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:"100%",
        height:"15%"
      }
    } >
      <TouchableOpacity onPress={()=> this.exit()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
  
    </View>
    
    <View style={{height:"50%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Question {this.state.Qno} </Text>
    <View style={{flexDirection:"row",marginTop:"7%"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.Question} </Text>
    </View>
    <View style={{flexDirection:"column",marginTop:"5%"}}>

    {this.state.Options.map((item,key)=>(
      <TouchableOpacity onPress ={()=>this.selAns(key+1)}style = {
        {
          "alignItems": "flex-start",
          "width": 320,
          "height": 60,
          "marginTop":"3%",
          "borderRadius": 15,
          "backgroundColor": "rgba(233, 237, 241, 255)"
        }
      } >
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "padding":"5%",
          "textAlign": "left",
          "fontSize": 18,
          "color": "rgba(67, 81, 111, 255)"
        }
      } > {key+1}.  {item} </Text>
      </TouchableOpacity>
    ))}
    </View>
    
    <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-around"}}>
    <TouchableOpacity onPress={()=> this.prevQ()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"10%",
        "width": 100,
        "height": 50,
        "borderRadius": 30,
        "backgroundColor": "#43516F"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Prev </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    <TouchableOpacity onPress ={()=> this.nextQ()}contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"10%",
        "width": 100,
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
    } > Next </Text>
    </View>

      </View>
    
    </TouchableOpacity>
    
    </View>
    
    <View style={{alignItems:"center",justifyContent:"center",flexDirection:"row",marginTop:"7%"}}>
    <View style={{width:"80%",alignItems:"center",justifyContent:"space-around",flexDirection:"row"}}>
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
export default QuizMain;