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

class Notifications extends Component{
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
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
      Notifications
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
      <TouchableOpacity>
      <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "padding":"2%",
        "justifyContent":"space-around",
        "width": 350,
        "height": 80,
        "borderRadius": 15,
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontWeight": "400",
        "fontSize": 14,
        "color": "rgba(67, 81, 111, 255)",
      }
    } > Due Assignment </Text>
    <View style = {
      {
        "alignItems": "flex-end",
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontSize": 14,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > SCI2004 </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontWeight": "400",
        "fontSize": 12,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
        "marginTop": "2%"
      }
    } > Due date: 8 PM on 24 th Jan </Text>
    </View>
    </View>
    
      </TouchableOpacity>

    </View>
    </View>

  );
  };
};
export default Notifications;