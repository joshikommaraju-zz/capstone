import React, {useState, Component} from 'react';
import {View,StyleSheet,AppState, BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Actions } from 'react-native-router-flux';
import CookieManager from '@react-native-community/cookies';






class Webview extends Component {
  constructor(props) {
    super(props);
    this.currentUrl = '',
    this.myWebView = React.createRef();
    this.state={
      isReady: false,
      cookieString: '',
      username: "",
      link: "",
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

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
}

onBackButtonPressed() {
    return true;
}

  async componentDidMount() {
    console.log("inside webview")
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    await this.setState({
      link: this.props.link,
    })
    console.log("Webview Link",this.state.link)
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

    
  }

  render(){
    return (
      <View style={{flex:1}}>
        <WebView
        source={{
          uri: this.state.link
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
      
      <FloatingAction floatingIcon={require("../assets/close.png")} position="left" distanceToEdge={{vertical:15,horizontal:75}} buttonSize={45} listenKeyboard={false} color="#fff" onPressMain={()=>Actions.pop()} />
    </View>
      
   );
  }
}

export default Webview