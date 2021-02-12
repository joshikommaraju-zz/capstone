import React, {useState, Component} from 'react';
import {View,StyleSheet,AppState, BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Actions } from 'react-native-router-flux';
import CookieManager from '@react-native-community/cookies';
import { API, graphqlOperation } from 'aws-amplify';
import { updateAttendance } from '../src/graphql/mutations';
var url = "https://bbb.srksveda.com/b/adm-8mi-xn6";

// if(global.user.username.contains("FAC")){
//    url = "http://bbb.srksveda.com/";
//    https://bbb.srksveda.com/b/adm-8mi-xn6  
// }







class Conference extends Component {
  constructor(props) {
    super(props);
    this.currentUrl = '',
    this.myWebView = React.createRef();
    this.state={
      userID: "",
      roomData: {},
      isReady: false,
      cookieString: '',
      username: "",
      roomlink: "",
      subjectCode: "",
      subjectName: "",
      appState: AppState.currentState
    };
  }

  jsonCookiesToCookieString = (json) => {
    let cookiesString = '';
    for (let [key, value] of Object.entries(json)) {
      cookiesString += `${key}=${value.value}; `;
    }
    return cookiesString;
  };

  onNavigationStateChange = (navState) => {
    this.currentUrl = navState.url;
  };


  provideMeSavedCookies = async () => {
    try {
      let value = await AsyncStorage.getItem('savedCookies');
      if (value !== null) {
        return Promise.resolve(JSON.parse(value));
      }
    } catch (error) {
      return {}
    }
  };
  onBackButtonPressed() {
    return true;
}


  onLoadEnd = (syntheticEvent) => {
    let successUrl = this.state.roomlink;
    if (this.currentUrl === successUrl) {
      CookieManager.getAll(true).then((res) => {
        AsyncStorage.setItem('savedCookies', JSON.stringify(res));
        if (res.PHPSESSID) {
          AsyncStorage.setItem('PHPSESSID', res.PHPSESSID.value);
        }
      });
    }
  };

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);

    await this.setState({
      userID: this.props.userID,
      roomlink: this.props.roomlink,
      roomData: this.props.classData,
      username: this.props.username,
    })
    let Cdata = this.state.roomData;
    console.log("room data",Cdata) 
    await this.setState({
      subjectCode: Cdata.subName,
      subjectCode: Cdata.subCode
    })
    //console.log(this.state.subjectCode)
    this.provideMeSavedCookies()
      .then(async (savedCookies) => {
        let cookiesString = this.jsonCookiesToCookieString(savedCookies);
        const PHPSESSID = await AsyncStorage.getItem('PHPSESSID');
        if (PHPSESSID) {
          cookiesString += `PHPSESSID=${PHPSESSID};`;
        }
        this.setState({cookiesString, isReady: true});
      })
      .catch((e) => {
        this.setState({isReady: true});
      });

    var timeIn= await AsyncStorage.getItem('@TimeOut:key');
    if(parseInt(timeIn)<=0||timeIn=='NaN'){
    global.countInTime=2;
    AsyncStorage.setItem('@TimeOut:key','30');
    }
    else
    global.countInTime=parseInt(timeIn);
    AppState.addEventListener("change", this._handleAppStateChange);
  }


  async postAttendance(){
    let dat = await AsyncStorage.getItem("@DBdata")
    let data = JSON.parse(dat)
    dat = data.attendance.items
    let index = 0
    for (index =0; index < dat.length; index++) {
      if (dat[index].subject.subjectCode == this.state.subjectCode){
        break
      }
    }
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    let today = new Date()
    let thisMonth = today.getMonth()
    let thisDay = today.getDate()
    let PmoD = dat[index]
    //console.log("id:", dat[index].id)
    //console.log("sub selected",dat[index].subject.subjectCode)
    //console.log("month slected", months[thisMonth], "selected day", thisDay-1)
    switch(months[thisMonth]){
      case "jan" :  PmoD.jan[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.jan }}));
      break;
      case "feb" :  PmoD.feb[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.feb }}));
      break;
      case "mar" :  PmoD.mar[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.mar }}));
      break;
      case "apr" :  PmoD.apr[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.apr }}));
      break;
      case "may" :  PmoD.may[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.may }}));
      break;
      case "jun" :  PmoD.jun[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.jun }}));
      break;
      case "jul" :  PmoD.jul[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.jul }}));
      break;
      case "aug" :  PmoD.aug[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.aug }}));
      break;
      case "sep" :  PmoD.sep[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.sep }}));
      break;
      case "oct" :  PmoD.oct[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.oct }}));
      break;
      case "nov" :  PmoD.nov[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.nov }}));
      break;
      case "dec" :  PmoD.dec[thisDay -1]=1;await  API.graphql(graphqlOperation(updateAttendance, {input: {id: PmoD.id, oct: PmoD.dec }}));
      break;
      default: console.log("Something @ went Wrong");
    }
  }
  
  
  checkAtten(){
    var joined = new Date();
    var hours = joined.getHours();
    var minutes = joined.getMinutes();
    var exitTimr=hours+""+minutes;
    console.log("exit timeer", exitTimr)
    console.log("join time", global.joinTime)
    if(exitTimr-global.joinTime>=2){
      console.log(global.attSub+" present");
      this.postAttendance();
      showMessage({
        message: "Attndance Posted!",
        autoHide:true,
        duration:1800,
        type: "success",
      });
      Actions.home();
    }
    else{
      console.log(global.userName+" left class "+global.attSub);
      showMessage({
        message: "Class Left!",
        autoHide:true,
        duration:1800,
        type: "danger",
      });
      //Actions.push('home');
    }
    }
  

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }
    else{
      var joined = new Date();
      var hours = joined.getHours();
      var minutes = joined.getMinutes();
      var exitTimr=hours+""+minutes;
      console.log(global.countInTime+" App is going background ");

  }
    this.setState({ appState: nextAppState });
  };

  render(){
    return (
      <View style={{flex:1}}>
        <WebView
        source={{
          uri: this.state.roomlink
        }}
        style={{flex: 1}}
        scalesPageToFit
          useWebKit
          onLoadEnd={this.onLoadEnd}
          onNavigationStateChange={this.onNavigationStateChange}
          sharedCookiesEnabled
          javaScriptEnabled={true}
          domStorageEnabled={true}
      />
      
      <FloatingAction floatingIcon={require("../assets/close.png")} position="left" distanceToEdge={{vertical:15,horizontal:75}} buttonSize={45} listenKeyboard={false} color="#fff" onPressMain={()=>this.checkAtten()} />
    </View>
      
   );
  }
}

export default Conference