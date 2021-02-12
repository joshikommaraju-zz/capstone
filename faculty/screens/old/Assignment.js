import React,{ Component } from 'react';
import {
  View,
  Text,
  Image,
  render,
  TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { Storage } from 'aws-amplify';

import { YellowBox } from 'react-native';

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
    };
  }

  async componentDidMount(){
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
    <TouchableOpacity onPress = {()=> Actions.pop()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Actions.notifications()}>
    <Svg width={40} height={38} viewBox="0 0 20 29">
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
    
    <View style={{height:"40%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } >{this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text> 
    <View style={{height:"100%",marginTop:"15%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Note </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "flexDirection":"row",
        "justifyContent":"center",
        "width": 350,
        "height": 60,
        "borderRadius": 15,
        "marginTop":"3%",
        "marginBottom":"5%",
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 16,
        "padding":"3%",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.assignmentNotice} </Text>
    </View>

    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Latest Submission </Text>
    
    <View style={{width:"100%",marginLeft:"25%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent":"space-around",
        "marginVertical":"5%",
        "width": "80%",
        "height": 80,
        "borderRadius": 15,
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "marginVertical":"7%",
        "fontSize": 14,
        "color": "rgba(67, 81, 111, 255)",
        "textAlignVertical":"center"
      }
    } > {this.state.assignmentName} </Text>
    <View style = {
      {
        "alignItems": "flex-end",
        "marginVertical":"4%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 12,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
      }
    } >{this.state.assignmentlatestDate} </Text>
    </View>
    </View>
  </View>
    
    <TouchableOpacity onPress={()=>this.handleRemove()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
      <View style={{marginTop:"7%",padding:"2%"}}>
      <View style = {
      {
        "alignItems": "center",
        "paddingVertical":"7%",
        "width": 200,
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
    } > Delete Submission</Text>
    </View>

      </View>
    
    </TouchableOpacity>
    </View>
    
    
    </View>
    </View>
    
    
  );
  };
};
export default Assignment;