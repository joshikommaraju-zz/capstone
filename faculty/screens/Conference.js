import React, {useState, Component} from 'react';
import {View,StyleSheet,AppState, BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Actions } from 'react-native-router-flux';
import { getFacultyByUsername, getStudentByUsername, getSubjectByCode } from '../graphql/queries.js';
import { updateAttendance } from '../graphql/mutations.js';
import { API, graphqlOperation } from 'aws-amplify';
import CookieManager from '@react-native-community/cookies';


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
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
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

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    AppState.addEventListener("change", this._handleAppStateChange);
    await this.setState({
      userID: this.props.userID,
      roomlink: this.props.roomlink,
      roomData: this.props.classData,
      username: this.props.username,
    })
    console.log("link:",this.state.roomlink)
    
    let Cdata = this.state.roomData;
    await this.setState({
      subjectName: Cdata.subName,
      subjectCode: Cdata.subCode
    })

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
    global.countInTime=10;
    AsyncStorage.setItem('@TimeOut:key','10');
    }
    else
    global.countInTime=parseInt(timeIn);
    
    this.checkAtten();
  }
  
  
  async checkAtten(){
    var joined = new Date();
    var key
    let moF1 = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    for(var i=0;i<moF1.data.getFacultyByUsername.attendance.items.length;i++){
      if(moF1.data.getFacultyByUsername.attendance.items[i].subject.subjectCode==this.state.subjectCode){
        key=i;
      }
    }
    let attObj
    var monName
    switch(joined.getMonth()){
      case 0 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].jan;
      attObj[joined.getDate()-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,jan:attObj}}));
      break;
      case 1 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].feb;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,feb:attObj}}));
      break;
      case 2 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].mar;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,mar:attObj}}));
      break;
      case 3 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].apr;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,apr:attObj}}));
      break;
      case 4 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].may;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,may:attObj}}));
      break;
      case 5 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].jun;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,jun:attObj}}));
      break;
      case 6 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].jul;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,jul:attObj}}));
      break;
      case 7 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].aug;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,aug:attObj}}));
      break;
      case 8 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].sep;
      attObj[joined.getDate()-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,sep:attObj}}));
      break;
      case 9 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].oct;
      attObj[joined.getDate()-1]=1;
      await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,oct:attObj}}));
      break;
      case 10 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].nov;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,nov:attObj}}));
      break;
      case 11 : attObj=await moF1.data.getFacultyByUsername.attendance.items[key].dec;
      attObj[joined.getDate()-1]=1;
    await API.graphql(graphqlOperation(updateAttendance, {input:{id:moF1.data.getFacultyByUsername.attendance.items[key].id,dec:attObj}}));
      break;
      default: console.alert("Something @ went Wrong");
    }
    console.log(attObj,"Batte Boss")
    console.log(this.state.subjectName+" present");
 
  }
  
  checkAtten1(){
    Actions.pop();
  }
  

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
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
      var exitTimr = (hours*100) + minutes
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