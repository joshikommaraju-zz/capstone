import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { render } from 'react-dom';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';


class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        userData: {},
        isLoggedin: '',
    };
  }

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    try {
      let userdata = await AsyncStorage.getItem("@userData");
      //global.user = userdata;
      if (userdata === null)
      {
         console.log("not logged in")
      }
      else{
        console.log("persisitance login found")
        global.QUNA = this.state.username 
         Actions.push('home')
      }
      this.setState({userData:userdata})
      console.log(userdata);
    } 
    catch (error) {
      console.log("Something went wrong", error);
    }
  }

    //signs in with enteered values
    async signIn(id,pass) {
      try {
        console.log('button pressed');
          let user = await Auth.signIn(id,pass);
          console.log(this.state.username,'user signed in');
          console.log("usertoken challenge:",user.challengeName,"parameter:", user.challengeParam)
          if(user.challengeName === 'NEW_PASSWORD_REQUIRED')
          {
            Actions.push('verification',{token:user})
            user = null
            showMessage({
              message: "Password Reset Required",
              autoHide:true,
              duration:1800,
              type: "success",
            });
          }
          else{
            await AsyncStorage.setItem("@userData", JSON.stringify(user));
            await AsyncStorage.setItem("@QUNA", this.state.username);
            global.QUNA = this.state.username 
            Actions.push('home');
            showMessage({
              message: "Logged in Succesfully!",
              autoHide:true,
              duration:1800,
              type: "success",
            });
          }
          //
      }catch (error) {
        console.log("error")
          //alert(error)
          showMessage({
            message: 'Invalid Credentials',
            autoHide:true,
            duration:3600,
            type: "danger",
          });
      }
    }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    //BackHandler.exitApp()
    return true;
  }

  handleUserName = text => {
  this.setState({ username: text });
  }
  
  handlePassword = text => {
  this.setState({ password: text });
  }

  handleLogin = () =>{
    this.signIn(this.state.username, this.state.password)
  }
  handleRegister = () =>{
    console.log("go to register page");
    Actions.register()
  }
  handleForgotpassword = () =>{
    console.log("forgot password pressed")
    alert ("please contact your organisation")
  }

  render(){
  return (
    <View style = {{"alignItems": "center",alignContent:"center", justifyContent:"center", "flex": 1}} >
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontWeight": "400",
        "fontSize": 28,
        "textAlign": "center",
        "color": "#9E9A35",
      }
    } >Login to Portal</Text>
   
    <TextInput 
      autoCapitalize="none"
      placeholder="Username"
      placeholderTextColor="#43516F"
      onChangeText={this.handleUserName}
      //value={email}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 43,
        "width": 275,
        "height": 50,
        "borderRadius": 0,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "backgroundColor": "#E8E596"
      }
    }
    />
   <TextInput 
      autoCapitalize="none"
      onChangeText={this.handlePassword}
      //value = {password}
      placeholderTextColor="#43516F"
      secureTextEntry = {true}
      placeholder="Password"
      style =  {
      {
        "alignItems": "flex-start",
        "marginTop": 25,
        "width": 275,
        "height": 50,
        "color":"#43516F",
        "padding":"3%",
        "fontSize":14,
        "borderRadius": 0,
        "backgroundColor": "#E8E596"
      }
    }
    />
    
    <TouchableOpacity  onPress={this.handleLogin} style = {
      {
        shadowColor: '#3D73DD',
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.3,
        shadowRadius: 48,
        elevation: 14,
        "alignItems": "flex-start",
        "paddingStart": 45,
        "paddingTop": 11,
        "marginTop": 33,
        "width": 144,
        "height": 46,
        "borderRadius": 0,
        "backgroundColor": "#9E9A35"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontSize": 18,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Login </Text>
    </TouchableOpacity>

    
    </View>

  );

};

};
export default Login;