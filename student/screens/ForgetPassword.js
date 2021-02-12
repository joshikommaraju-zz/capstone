import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  render,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';

class ForgetPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
        currPass: "",
        newPass: "",
        confirmPass:"",
        verificationCode:"",
        token: null,
        email: "",
        phone_number: "",
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
    await this.setState({token: this.props.token,email: this.props.email, phone: this.props.phone})
    console.log("this.state.token",this.state.token)
  }


  handlephone = text => {
    let pre = "+91"
    let c= pre.concat(text)
    this.setState({ phone_number: c });
  }

  handleemail = text => {
    this.setState({ email: text });
  }

  handlecurrPass = text => {
    this.setState({ currPass: text });
  }
    
  handlenewPass = text => {
    this.setState({ newPass: text });
  }

  handleconfirmPass = text => {
    this.setState({ confirmPass: text });
  }
  
  async handlereset() {

    if(this.state.newPass === this.state.confirmPass)
    {
      const { requiredAttributes } = this.state.token.challengeParam;
      console.log("req Arrtibutes",requiredAttributes) // the array of required attributes, e.g ['email', 'phone_number']
        let user = Auth.completeNewPassword(
            this.state.token,               // the Cognito User Object
            this.state.confirmPass,       // the new password
            // OPTIONAL, the required attributes
            {
              email: this.state.email,
              phone_number: this.state.phone_number
            }
        ).then(user => {
          console.log("verified, changed!!!")
          Actions.pop()
          showMessage({
            message: "Reset Successfull!!",
            autoHide:true,
            duration:1800,
            type: "success",
          });
        }).catch(e =>{
          console.log("exception", e)
          showMessage({
            message: "Password not strong",
            autoHide:true,
            duration:1800,
            type: "danger",
          });
        })
    }     
    else{
      showMessage({
        message: "Confirm password do not match!!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
    }
  }

  render(){
  return (
    <View style = {
      {
        "alignItems": "center",
        "paddingTop": 51.33,
        "flexDirection":"column",
        "flex": 1
      }
    } >

    <View style = {
      {
        "width": "90%",
        "height": 16.67,
        "alignItems":"flex-end"
      }
    }
    >
      <TouchableOpacity onPress = {()=> Actions.pop()}>
    <Svg width={48} height={40} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    
    </View>
    
    <View style = {{"alignItems": "center",alignContent:"center", justifyContent:"center", "flex": 1}} >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 28,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > Change Password </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontSize": 14,
        "color": "rgba(61, 115, 221, 255)",
        "marginTop": 14
      }
    } > Try a stronger one </Text>
    <TextInput 
      autoCapitalize="none"
      placeholder="Email"
      onChangeText={this.handleemail}
      placeholderTextColor="#43516F"
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33,
        "width": 275,
        "height": 50,
        "borderRadius": 22.5,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#DCE4F4"
      }
    }
    />
    <TextInput 
      autoCapitalize="none"
      placeholder="Phone Number (10 Digits)"
      onChangeText={this.handlephone}
      placeholderTextColor="#43516F"
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33,
        "width": 275,
        "height": 50,
        "borderRadius": 22.5,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#DCE4F4"
      }
    }
    />

    <TextInput 
      autoCapitalize="none"
      onChangeText={this.handlecurrPass}
      placeholder="Old Password"
      placeholderTextColor="#43516F"
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33,
        "width": 275,
        "height": 50,
        "borderRadius": 22.5,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#DCE4F4"
      }
    }
    />
    <TextInput 
      autoCapitalize="none"
      placeholder="New Password"
      onChangeText={this.handlenewPass}
      placeholderTextColor="#43516F"
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33,
        "width": 275,
        "height": 50,
        "borderRadius": 22.5,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#DCE4F4"
      }
    }
    />
   <TextInput 
      autoCapitalize="none"
      placeholder="Confirm Password"
      onChangeText={this.handleconfirmPass}
      placeholderTextColor="#43516F"
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33,
        "width": 275,
        "height": 50,
        "borderRadius": 22.5,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#DCE4F4"
      }
    }
    />
    <TouchableOpacity onPress={()=> this.handlereset()}
    style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 35,
        "paddingTop": 11,
        "marginTop": 33,
        "width": 144,
        "height": 46,
        "borderRadius": 23,
        "backgroundColor": "rgba(61, 115, 221, 255)",
        shadowColor: '#3D73DD',
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.3,
        shadowRadius: 48,
        elevation: 14,
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontSize": 18,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Submit </Text>
    </TouchableOpacity>
    </View>

    
  </View>

  );
};
};
export default ForgetPassword;