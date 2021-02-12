import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  render,
  TouchableOpacity,
  BackHandler
} from 'react-native';
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



class M_QuizSummary extends Component{
  constructor(props) {
    super(props);
    this.state={
      QP:{},
      subjectCode: "",
      subjectName: "",
      username: global.username,
      marks: 0,
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
    let paper = await this.props.QP;
    let SN = await this.props.subjectName;
    let SC = await this.props.subjectCode;
    let Ma = await this.props.M;
    this.setState({marks: Ma, QP: paper,subjectCode:SC,subjectName:SN});
    console.log("marksObtained",Ma)
  }

  handleExit(){
    console.log("Exit")
    Actions.popTo('home')
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
    <TouchableOpacity onPress={()=> this.handleExit()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
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
    
    </View>
    
    <View style = {
      {
        "alignItems": "center"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.QP.heading} </Text>
    <View style = {
      {
        "alignItems": "center",
        "marginTop": "10%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Max.Marks </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(60, 114, 219, 255)",
        "marginTop": "2%"
      }
    } > {this.state.QP.totalmarks} </Text>
    </View>
    <View style = {
      {
        "alignItems": "center",
        "marginTop": "10%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Scored.Marks </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)",
        "marginTop": "2%"
      }
    } > {this.state.marks} </Text>
    </View>
    
    </View>



    </View>
  );
};
};
export default M_QuizSummary;