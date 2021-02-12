import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { Router, Scene } from 'react-native-router-flux'
import Assignment from '../screens/Assignment.js'
import Attendance from '../screens/Attendance.js'
import Home from '../screens/Home.js'
import Login from '../screens/Login.js'
import Marks from '../screens/Marks.js'
import Utilities from '../screens/Utilities.js'
import PasswordReset from '../screens/PasswordReset.js'
import Profile from '../screens/Profile.js'
import Register from '../screens/Register.js'
import Subject from '../screens/Subject.js'
import QuizMain from '../screens/QuizMain.js'
import QuizSummary from '../screens/QuizSummary.js'
import Webview from '../screens/Webview.js'
import QuizIntro from '../screens/QuizIntro.js'
import Conference from '../screens/Conference.js'
import M_QuizMain from '../screens/mock_test/M_QuizMain.js'
import M_QuizSummary from '../screens/mock_test/M_QuizSummary.js'
import M_QuizIntro from '../screens/mock_test/M_QuizIntro.js'

class Root extends Component{
   
    //check for already stored credentials 
    //if found -> home Screen
    //else -> login screen
    

   render(){
      return(
         <Router>
            <Scene key = "root">
            <Scene key = "assignment" component = {Assignment} hideNavBar={true} />
            <Scene key = "attendance" component = {Attendance} hideNavBar={true} />
            <Scene key = "home" component = {Home} hideNavBar={true}  />
            <Scene key = "login" component = {Login}  hideNavBar={true}  type="replace"initial = {true}/>
            <Scene key = "marks" component = {Marks} hideNavBar={true}   />
            <Scene key = "utilities" component = {Utilities} hideNavBar={true} />
            <Scene key = "passwordReset" component = {PasswordReset} hideNavBar={true} />
            <Scene key = "profile" component = {Profile} hideNavBar={true} />
            <Scene key = "register" component = {Register} hideNavBar={true}  />
            <Scene key = "subject" component = {Subject} hideNavBar={true}  />
            <Scene key = "quizIntro" component = {QuizIntro} hideNavBar={true}  />
            <Scene key = "quizMain" component = {QuizMain} hideNavBar={true}  />
            <Scene key = "quizSummary" component = {QuizSummary} hideNavBar={true}  />
            <Scene key = "m_quizIntro" component = {M_QuizIntro} hideNavBar={true}  />
            <Scene key = "m_quizMain" component = {M_QuizMain} hideNavBar={true}  />
            <Scene key = "m_quizSummary" component = {M_QuizSummary} hideNavBar={true}  />
            <Scene key = "conference" component = {Conference} hideNavBar={true}  />
            <Scene key = "webview" component = {Webview} hideNavBar={true}  />
            </Scene>
         </Router>
      );
   };
}
export default Root; 
//
//
//