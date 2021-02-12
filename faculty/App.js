import React,{Component} from 'react';
import { StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import Root from './routes/Routes';
import FlashMessage from "react-native-flash-message";
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { check } from 'react-native-permissions';
import { showMessage, hideMessage } from "react-native-flash-message";
import SplashScreen from 'react-native-splash-screen';
Amplify.configure(awsconfig);

class  App extends Component{

  state= {
    PermissionState: "",
  }

  async componentDidMount() {
    const PermssionState = (check(PermissionsAndroid.PERMISSIONS.CAMERA) && 
    check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO) && 
    check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE) &&
    check(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE) &&
    check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE));

    this.setState({
      PermissionState: PermssionState,
    });

    //Calling the permission function
    if(this.PermissionState !== "granted"){ 
      const granted = await PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
      );
      if(granted['android.permission.CAMERA']
        &&granted['android.permission.RECORD_AUDIO']
        &&granted['android.permission.READ_EXTERNAL_STORAGE']
        &&granted['android.permission.READ_PHONE_STATE']
        &&granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          PermissionState: true,
        });

        SplashScreen.hide()
      } 
      else{
        showMessage({
          message: "Permissions not set!, might cause problems while using the App",
          autoHide:true,
          duration:1800,
          type: "danger",
        });
      }
    }
  }

  render(){
    return(
      <View style={{ flex: 1 }}>
      <Root/>
      <FlashMessage position="top"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;