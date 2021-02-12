import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  render,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"


class Utilities extends Component{

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  async goToFTP(){
    let dat = await AsyncStorage.getItem("@DBdata")
    let data = JSON.parse(dat)
    //console.log("go to FTP",data.classSection.school.ftplink)

    console.log("go to FTP")
    Actions.push('webview',{link: data.classSection.school.ftplink})
  }

  goToMockTest(){
    console.log("go to Mock Test")
    Actions.push('m_quizIntro')
  }
/*
  gotoLibrary(){
    <TouchableOpacity onPress={()=> this.gotoLibrary()} style={{marginTop:"10%"}}>
    <View style = {
      {
        "alignItems": "center",
        "width": 200,
        "justifyContent":"center",
        "height":120,
        "borderRadius": 20,
        "backgroundColor": "#3C72DB"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "paddingTop":"2%",
        "fontSize": 24,
        "textAlign": "center",
        "textAlignVertical":"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > E-books Corner </Text>
    </View>
    </TouchableOpacity>
    console.log("go to e-Corner")
    Actions.push('webview',{link: "https://openstax.org/subjects"})
  }
  */

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
    <TouchableOpacity onPress={()=> Actions.pop()} >
    <Svg width={48} style={{marginTop:"-20%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }}>
      Utilities
    </Text>
    <TouchableOpacity style={{opacity:0}}>
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
    
    
    <View style = {
      {
        "alignItems": "center",
        "marginTop": "10%"
      }
      
    } >
    <View style={{height:"25%",width:"80%",flexDirection:"column",alignItems:"center"}}>
    <TouchableOpacity onPress={()=> this.goToMockTest()} style={{marginTop:"10%"}}>
    <View style = {
      {
        "alignItems": "center",
        "width": 200,
        "justifyContent":"center",
        "height":120,
        "borderRadius": 20,
        "backgroundColor": "#3C72DB"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "paddingTop":"2%",
        "fontSize": 24,
        "textAlign": "center",
        "textAlignVertical":"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Mock Tests </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> this.goToFTP()} style={{marginTop:"10%"}}>
    <View style = {
      {
        "alignItems": "center",
        "width": 200,
        "justifyContent":"center",
        "height":120,
        "borderRadius": 20,
        "backgroundColor": "#3C72DB"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "paddingTop":"2%",
        "fontSize": 24,
        "textAlign": "center",
        "textAlignVertical":"center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > FTP </Text>
    </View>
    </TouchableOpacity>

    


    </View>
    </View>
    </View>
    

  );
  };
};

export default Utilities;