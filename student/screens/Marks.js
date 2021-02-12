import React, { Component } from 'react';
import {
  View,
  Text,
  render,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { API, graphqlOperation } from 'aws-amplify';
import { getSubject } from '../src/graphql/queries';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: "useNativeDriver" was not specified.',
]);


//data pattern data[0] ={name:Assignment 1, Date: 22ndAug, maxMarks: '75', marksObt: '15'}

class Marks extends Component  {
  constructor(props) {
    super(props);
    this.state={
      assArr: [],
      subject: "",
      subjectName: "",
      subjectCode: "",
      username: "",
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
    console.log("inside marks")
    let suNa = await this.props.subjectName
    let suCo = await this.props.subjectCode
    let usNa = await this.props.usNa
    let assArr = await this.props.data
    this.setState({
      username: usNa,
      subjectName: suNa,
      assArr: assArr,
      subjectCode:suCo})   
      console.log("Marks Array",this.state.assArr) 
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
    <TouchableOpacity onPress ={()=>Actions.pop()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    
    
    </View>
    
    <View style={{height:"20%",marginTop:"5%", alignItems:"center"}}>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > {this.state.subjectName} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(102, 107, 117, 255)",
        "marginTop": 9
      }
    } > {this.state.subjectCode} </Text> 
    </View>
    <ScrollView showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{flexGrow:1,height:"30%",width:"100%",paddingLeft:"10%"}} horizontal={true}>
        {(this.state.assArr.length > 0 )?    
        //true (if marks are available)    


        this.state.assArr.map((data,key)=> (
          <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
          <View style={{"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": 270,"height": 245,"borderRadius": 25,"backgroundColor": "#FFF",
            shadowColor:"#000",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
            <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": 18,"color": "#43516F","width":"90%","marginTop": "10%"}} >
             {data.name}
            </Text>
            <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": 16,"color": "#43516F","width":"90%","marginTop": "2%","marginTop":"2%"}} >
              {data.date}
            </Text>
            <View style={{alignItems:"flex-start",justifyContent:"center",flexDirection:"row"}}>
              <View style={{"flexDirection":"column","alignItems":"flex-start","marginTop": "7%","justifyContent":"space-around"}}>
                <View style={{flexDirection:"row",marginBottom:"5%",marginRight:"7%",width:"80%",alignItems:"center", justifyContent:"space-around"}}>
                <TouchableWithoutFeedback>
                <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
                  <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                  {data.marksObt}
                  </Text>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                <View style={{"alignItems":"center","justifyContent":"space-around","paddingTop": "7%","width": 50,"height": 50,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
                  <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 12,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
                  {data.maxMarks}
                  </Text>
                </View>
                </TouchableWithoutFeedback>
                </View>
              </View>
            </View>   
          </View>
          </View>
        ))



        :  
        //false (if no marks are available)



        <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
        <View style={{"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": 270,"height": 245,"borderRadius": 25,"backgroundColor": "#FFF",
          shadowColor:"#000",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
          <Text style = {{"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": 18,"color": "#43516F","width":"90%","marginTop": "10%"}} >
           No Marks Available
          </Text>   
        </View>
        </View> 

        }
        
      
      <View style={{marginRight:50}}></View>
    
    </ScrollView>
        

    
    </View>
  
  );
};
};
export default Marks;