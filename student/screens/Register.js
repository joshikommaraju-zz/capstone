import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import RNSmtpMailer from "react-native-smtp-mailer";
import { Actions } from 'react-native-router-flux';
import { showMessage } from "react-native-flash-message";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        schoolName: "",
        contactNumber: "",
        emailSchool: "",
        name:""
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
  }

  async sendMail(){
    var message = "<p>"+"Hi I am "+this.state.name+", from <b>"+this.state.schoolName+"</b>.<br>I wanted to know more about Veda e-learning platform.<br><br>My contact details are: <br>Phone: "+this.state.contactNumber+"<br>Email: "+this.state.emailSchool+"<br>Thankyou </p>";
    try{
      const mail = await RNSmtpMailer.sendMail({
      mailhost: "smtp.gmail.com",
      port: "465",
      ssl: true, //if ssl: false, TLS is enabled,**note:** in iOS TLS/SSL is determined automatically, so either true or false is the same
      username: "srtheories@gmail.com",
      password: "jxqmlzvjovzgzjuh",
      from: this.state.emailSchool,
      recipients: "srkvedasolutions@gmail.com",
      subject: "Registration_Request:"+this.state.schoolName,
      htmlBody: message,
      attachmentPaths: [],
      attachmentNames: [], 
      attachmentTypes: []});
      this.setState({schoolName: "",
      contactNumber: "",
      emailSchool: "",
      name:""});
    }
    catch(error) {
      console.log("Something went wrong", error);
    }
  }

  handleschoolName = text => {
    this.setState({ schoolName: text });
  }

  handlecontactNumber = text => {
    this.setState({ contactNumber: text });
  }

  handleemailSchool = text => {
    this.setState({ emailSchool: text });
  }

  handlename = text => {
    this.setState({ name: text });
  }

  handleSendMail (){
    console.log("Send Mail Pressed");
    //console.log(this.state);
    this.sendMail();
    showMessage({
      message: "Thankyou for showing interest in our platform. We will Shortly get in touch with you",
      autoHide:true,
      duration:3600,
      type: "success",
    });
    Actions.login();
  }
  handleLogin (){
    console.log("Back to Login");
    Actions.pop();
  }


  render(){

  return (
    <View style = {{"alignItems": "center",alignContent:"center", justifyContent:"center", "flex": 1}} >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 28,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > Glad you are here! </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "fontSize": 14,
        "color": "rgba(61, 115, 221, 255)",
        "marginTop": 14
      }
    } > Fill out the form and we contact you </Text>
    <TextInput 
      onChangeText={this.handleschoolName}
      autoCapitalize="none"
      placeholder="Name of Your School"
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
      onChangeText={this.handlecontactNumber}
      placeholder="Contact Number of School"
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
      onChangeText={this.handleemailSchool}
      placeholder="Email of School"
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
      onChangeText={this.handlename}
      placeholder="Your Name"
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

    <TouchableOpacity onPress={() => this.handleSendMail()} style = {
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
    } > Register </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.handleLogin()}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 20,
        "color": "rgba(67, 81, 111, 255)",
        "marginTop": 30
      }
    } > Login </Text>
    </TouchableOpacity>
    </View>

  );
}
};

export default Register;