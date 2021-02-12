import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  render,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { getFacultyByUsername } from '../graphql/queries';
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';

import { Dimensions } from 'react-native';
 
const {width, height} = Dimensions.get('window');


class profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        rollNum: "",
        department: "",
        designation: "",
        SchoolName: "",
        elementsT: [{subCode:"",type:"",time: ""},{},{}]
    };
  }

  days = ["M","T","W","Th","F","S","Su"]


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    const facData = await API.graphql(graphqlOperation(getFacultyByUsername, {username: global.QUNA}));
    console.log("Todays Schedule")
    let DBd = facData.data.getFacultyByUsername;
    let subData = this.props.subData;
    let user = DBd.facultyName
    let rollNum = DBd.regdNum
    let school = DBd.department.school.schoolName
    await this.setState({
      department:DBd.department.departmentName,
      designation: DBd.designation,
      rollNum:rollNum,
      SchoolName: school,
      userName: user
    })
    console.log("profile name", user)
    let today = new Date().getDay()
    console.log('today', today)
    let arr=[]
    for (let index1 = 0; index1 < subData.length; index1++) {
      let ele =subData[index1]
      let sc = ele.subCode
      let t = "Class"
      let d =""
      for (let index2 = 0; index2 < ele.slots.length; index2++) {
        if(this.days[today-1] === ele.slots[index2].day){
           d = ele.slots[index2].time
        }
      }
      let s = {
        subCode: sc,
        type: t,
        time: d
      }
      if(s.time != ""){
        arr.push(s)
      }
    }
    console.log("today's schedule", arr)
    this.setState({elementsT: arr})
 }

 async getToken(user) {
  try {
    let userData = await AsyncStorage.getItem("@DBdata");
    let data = JSON.parse(userData);
    this.setState({username: data.facultyName});
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

  async signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  handleChangePassword(){
    Actions.passwordReset();
  }

  handleSignout () {
    console.log("Logged out");
    this.signOut();
    AsyncStorage.removeItem("@userData");
    AsyncStorage.removeItem("@DBdata");
    Actions.popTo('login');
    showMessage({
      message: "Logged out Succesfully!",
      autoHide:true,
      duration:1800,
      type: "success",
    });
  }

  render(){
    return (
      <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column", justifyContent:"space-around"}}>
  
      <View style = {
        {"alignItems": "flex-start","justifyContent":"space-between","paddingTop": 52,
          "flexDirection":"row",
          paddingLeft:"10%",
          paddingRight:"10%",
          width:"100%",
          height:"15%"
        }
      }>
      <View style={{height:40, width:40,marginTop:"-2%"}}>
        <TouchableOpacity>
          <Image style={{height:40,width:40}} source={require("../assets/logo.png")}>
          </Image>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={()=> Actions.pop()}>
      <Svg width={48} height={40} viewBox="0 0 30 30">
        <Path
          fill="#43516f"
          d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
        />
      </Svg>
      </TouchableOpacity>
      </View>
      </View>
     
      <View style = {
        {alignItems:"center",height:"20%", width:"100%",justifyContent:"space-around"}} >
        <Svg width={90} height={90} viewBox="0 0 67 67.003">
        <G data-name="Pro Pic">
          <Path
            fill="#43516f"
            d="M67 33.5a33.386 33.386 0 01-2.7 13.192l-.111.256a33.555 33.555 0 01-36.5 19.55q-.3-.054-.6-.111a33.2 33.2 0 01-6.06-1.787q-.477-.192-.948-.4a26.094 26.094 0 01-.64-.288A33.5 33.5 0 1167 33.5z"
            data-name="Path 4"
          />
          <Path
            d="M27.687 66.493q-.3-.054-.6-.111a137.747 137.747 0 00-2.111-19.752 73.283 73.283 0 00-3.613-13.139 40.893 40.893 0 00-1.89-4.147 21.505 21.505 0 00-6-7.424l.353-.482a20.727 20.727 0 015.374 6.153q.715 1.186 1.374 2.531.706 1.439 1.347 3.056.409 1.029.79 2.129a77.275 77.275 0 012.821 10.9q.257 1.353.49 2.772a140.555 140.555 0 011.665 17.514z"
            data-name="Path 5"
            opacity={0.2}
          />
          <Path
            d="M20.077 64.202a26.094 26.094 0 01-.64-.288 48.661 48.661 0 00-1.284-7.69 25.229 25.229 0 00-1.171-3.489 10.469 10.469 0 00-3.151-4.412l.353-.481a10.952 10.952 0 013.294 4.514 30.959 30.959 0 011.973 6.955c.31 1.753.504 3.446.626 4.891z"
            data-name="Path 6"
            opacity={0.2}
          />
          <Circle
            cx={2.982}
            cy={2.982}
            r={2.982}
            data-name="Ellipse 1"
            opacity={0.2}
            transform="translate(7.153 15.947)"
          />
          <Circle
            cx={2.982}
            cy={2.982}
            r={2.982}
            data-name="Ellipse 2"
            opacity={0.2}
            transform="translate(8.114 41.618)"
          />
          <Path
            d="M21.975 23.938a13.246 13.246 0 00.764 6.8 12.072 12.072 0 002.29-12.92 13.247 13.247 0 00-3.054 6.12z"
            data-name="Path 7"
            opacity={0.2}
          />
          <Path
            d="M12.064 32.407a13.312 13.312 0 006.823.446 12.146 12.146 0 00-12.323-4.506 13.312 13.312 0 005.5 4.06z"
            data-name="Path 8"
            opacity={0.2}
          />
          <Path
            d="M11.487 55.14a9.285 9.285 0 004.785.3 8.461 8.461 0 00-8.638-3.159 9.284 9.284 0 003.853 2.859z"
            data-name="Path 9"
            opacity={0.2}
          />
          <Circle
            cx={13.06}
            cy={13.06}
            r={13.06}
            fill="#d0cde1"
            data-name="Ellipse 3"
            transform="translate(20.371 14.798)"
          />
          <Path
            fill="#d0cde1"
            d="M28.33 37.857s1.633 7.754 1.633 8.571 7.754 4.489 7.754 4.489l6.938-1.224 2.449-7.346s-4.081-6.122-4.081-8.571z"
            data-name="Path 10"
          />
          <Path
            fill="#2f2e41"
            d="M64.302 46.688l-.111.256a33.555 33.555 0 01-36.5 19.55q-.3-.054-.6-.111a33.2 33.2 0 01-6.06-1.787q-.477-.192-.948-.4a26.094 26.094 0 01-.64-.288 33.46 33.46 0 01-5.476-3.2l-1.548-4.491.87-.664 1.79-1.367 1.91-1.458.5-.38 7.494-5.721.553-.422 3.9-2.973s4.212 6.864 10.334 4.823a8.442 8.442 0 005.988-7.892z"
            data-name="Path 11"
          />
          <Path
            fill="#2f2e41"
            d="M22.105 17.336s4.147-8.984 12.094-6.911 12.44 5.183 12.785 8.293a44.373 44.373 0 01-.173 7.775s-.864-6.393-6.393-5.01-14.167.346-14.167.346l-1.382 12.44s-1.555-2.246-3.283-.864-5.01-13.305.519-16.069z"
            data-name="Path 12"
          />
          <Path
            fill="#2f2e41"
            d="M21.025 64.599q-.477-.192-.948-.4a26.094 26.094 0 01-.64-.288 33.582 33.582 0 01-8.681-5.818 11.744 11.744 0 011.657-1.872h6.123l.918 3.086z"
            data-name="Path 13"
          />
          <Path
            fill="#2f2e41"
            d="M58.94 46.02l5.252.928a33.492 33.492 0 01-5.626 8.778z"
            data-name="Path 14"
          />
        </G>
      </Svg>
      </View>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 24,
          "textAlign": "center",
          "color": "rgba(60, 114, 219, 255)",
          "marginTop": "2%"
        }
      } > {this.state.userName} </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 18,
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)",
          "marginTop": "2%"
        }
      } >{this.state.designation}</Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 18,
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)",
          "marginTop": "2%"
        }
      } >{this.state.department}</Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 18,
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)",
          "marginTop": "3.1%"
        }
      } >{this.state.SchoolName} </Text>
      <View>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontWeight": "400",
          "fontSize": 24,
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)",
          "marginTop": "5%"
        }
      } > Today </Text>
      </View>
      <View style={{height:"25%",marginTop:"5%"}}>
      <ScrollView centerContent={true} showsVerticalScrollIndicator={false} contentContainerStyle={{flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
      {this.state.elementsT.map((data,key)=>(
        <View style = {
          {
            "flexDirection": "row",
            "alignItems": "center",
            "justifyContent":"space-around",
            "width": "85%",
            "padding":"10%",
            "height": "10%",
            "marginTop":"2%",
            "zIndex":-2,
            "borderRadius": 10,
            "backgroundColor": "rgba(233, 237, 241, 255)"
          }
        } >
        <Text style = {
          {
            "fontFamily": "Poppins-Medium",
            "fontWeight": "400",
            "fontSize": 14,
            "color": "rgba(67, 81, 111, 255)",
            "marginHorizontal":"5%"
          }
        } > {data.subCode} </Text>
        <Text style = {
          {
            "fontFamily": "Poppins-Medium",
            "fontWeight": "400",
            "fontSize": 14,
            "textAlign": "center",
            "color": "rgba(67, 81, 111, 255)",
            "marginHorizontal":"5%"
          }
        } > {data.type} </Text>
        <Text style = {
          {
            "fontFamily": "Poppins-Medium",
            "fontWeight": "400",
            "fontSize": 14,
            "textAlign": "center",
            "color": "rgba(67, 81, 111, 255)",
            "marginHorizontal":"5%"
          }
        } > {data.time} </Text>
        </View>
      ))}
      
      </ScrollView>
      
      </View>
      <View style={{height:"25%",width:"80%",flexDirection:"column",alignItems:"center"}}>
      <TouchableOpacity onPress={()=> this.handleChangePassword()} style={{marginTop:"10%"}}>
      <View style = {
        {
          "alignItems": "center",
          "width": 200,
          "justifyContent":"center",
          "height": 50,
          "borderRadius": 50,
          "backgroundColor": "#3C72DB"
        }
      } >
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "paddingTop":"2%",
          "fontSize": 14,
          "textAlign": "center",
          "textAlignVertical":"center",
          "color": "rgba(255, 255, 255, 255)"
        }
      } > Change Password </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.handleSignout()} style={{marginTop:"5%"}}>
      <View style = {
        {
          "alignItems": "center",
          "width": 200,
          "justifyContent":"center",
          "height": 50,
          "borderRadius": 50,
          "backgroundColor": "#E9EDF1"
        }
      } >
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "paddingTop":"2%",
          "fontSize": 14,
          "textAlign": "center",
          "textAlignVertical":"center",
          "color": "#43516F"
        }
      } > Logout </Text>
      </View>
      </TouchableOpacity>
      
      </View>
      </View>
  
    );
  };
  };
  export default profile;