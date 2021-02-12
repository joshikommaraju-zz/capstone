import React,{ Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { YellowBox } from 'react-native';
import { Dimensions } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Storage } from 'aws-amplify';

import { updateAssignment } from '../graphql/mutations.js';
import { API, graphqlOperation } from 'aws-amplify';

const {width, height} = Dimensions.get('window');

YellowBox.ignoreWarnings([
  'Animated: "useNativeDriver" was not specified.',
]);


class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectName: "Science for Class 4",
      subjectCode: "SCI2004",
      assignmentNotice: "yo submit on Newtons law",
      assignmentlatestDate:"",
      assignmentName:"",
      userName: "",
      upNote:"",
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
    this.setState({
      subjectName: this.props.subjectName, 
      subjectCode: this.props.subjectCode,
      assignmentName:this.props.assignmentName,
      assignmentNotice:this.props.assignmentNotice,
      userName: this.props.userName,
    })
  }

  async remove(){
    try{
      let assignName = this.state.subjectName+'_'+this.state.subjectCode+'_'+this.state.userName;
    const del = await Storage.remove(assignName, { level: 'private' })
    showMessage({
      message: "Removed Succesfully!",
      autoHide:true,
      duration:1800,
      type: "success",
    });
    }
    catch(error){
      console.log('delete error:',error)
      showMessage({
        message: error,
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
  }

  handleRemove(){
    console.log("delete Pressed");
    this.remove();
  }

  async handleAssignup(){
    await API.graphql(graphqlOperation(updateAssignment, {input:{id:this.props.assignId,notice:this.state.upNote}}));
    this.noticeInput.clear()
  }




  render(){
  return (
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"flex-start"}}>

    <View style = {
      {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": height*0.05,
        "flexDirection":"row",
        paddingLeft:"9%",
        paddingRight:"10%",
        width:width,
        height:height*0.1
      }
    } >
    <TouchableOpacity onPress = {()=> Actions.pop()} >
    <Svg width={height*0.052} style={{marginTop:"-40%"}} height={height*0.052} rotation={180} viewBox="0 0 30 30">
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
        "fontSize": height*0.03,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.02,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text> 
    <View style={{height:"100%",marginTop:"15%", alignItems:"center"}}>
    <View style={{flexDirection:"row",justifyContent:"space-around"}}> 
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.03,
        "textAlign": "left",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Note </Text>
    <TouchableOpacity onPress={()=>this.handleAssignup()} style={{width:width*0.4}}>
      <Text style = {
      { 
        "fontFamily": "Poppins-Medium",
        "fontSize": height*0.028,
        "textAlign": "right",
        "textAlignVertical":"center",
        "color": "#9E9A35"
      }
    } >
        Edit
      </Text>
    </TouchableOpacity>
    </View>
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": width*0.8,
        "height": height*0.1,
        "borderRadius": 15,
        "marginTop":"3%",
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <TextInput clearButtonMode={"always"} ref={input => { this.noticeInput = input }} onChangeText={(text)=>this.setState({upNote:text})} multiline={true} placeholder= {this.state.assignmentNotice} style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": height*0.018,
        "width":width*0.75,
        "textAlign":"center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } />
    </View>
    <TouchableOpacity onPress= {()=> alert("Please use Web app for Assignment assessment and grading")} style={{marginTop:"3%"}}>
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
        "fontSize": width*0.03,
        "textAlign": "center",
        "textAlignVertical":"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > View Submissions </Text>
    </View>
    </TouchableOpacity>
    
    
    
    
    </View>
    </View>
    
    </View>
  );
  };
};

export default Assignment;