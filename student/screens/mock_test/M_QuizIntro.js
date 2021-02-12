import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { YellowBox } from 'react-native';
import { set } from 'react-native-reanimated';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

class M_QuizIntro extends Component{
  constructor(props) {
    super(props);
    this.state={
      alltests: [],
      QP: {},
      subjectList: [],
      titleList:[],
      subjectName: "",
      subjectCode: "",
      userID: '',
      examID: '',
      heading: "",
      username: global.userId,
      flag: 0,
    };
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  } 
  onBackButtonPressed() {
    return true;
  }

  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
    console.log("inside Quizz")
    let DBd = await AsyncStorage.getItem("@DBdata")
    let DBdata = await JSON.parse(DBd)
    //console.log("after import",DBdata.classSection.mockTests[0])
    //console.log("state",this.state)
    let testsArr = DBdata.classSection.mockTests
    //test subject array
    let tsaS= new Set()
    for(let i =0; i<testsArr.length; i++){
      testsArr[i]=JSON.parse(testsArr[i])
      tsaS.add(testsArr[i].subject)
    }
    var tsaA = []
    tsaS.forEach(v=> tsaA.push(v))
    //console.log("array", tsa)
    let tsa =[]
    for(let i=0; i<tsaA.length; i++){
      let r= {
        label: tsaA[i],
        value: i
      }
      tsa.push(r)
    }
    console.log("subject name",tsa)
    await this.setState({subjectList: tsa, alltests: testsArr})
    
    //console.log("after Export",this.state.QP.questions.length)
    
  }

  async setSubject(val){
    await this.setState({QP:{}, titleList: []})
    let Sn = this.state.subjectList[val].label
    console.log("selected subject",Sn)
    this.setState({subjectName:Sn})
    //test title array
    let tta=[]
    let s = 0
    for(let i =0; i<this.state.alltests.length; i++){
      if(Sn == this.state.alltests[i].subject){
      let r= {
        label: this.state.alltests[i].heading,
        value: s
      }
      s=s+1
      tta.push(r)
    }
    }
    console.log("test titles", tta)
    await this.setState({titleList: tta})
  }

  async setTitle(val){
    console.log("value for title", val)
    let St = this.state.titleList[val].label
    console.log("selected title", St)
    await this.setState ({heading: St})
    let QP = null
    for(let i =0; i<this.state.alltests.length; i++){
      if(this.state.subjectName == this.state.alltests[i].subject && St == this.state.alltests[i].heading){
        QP = this.state.alltests[i]
      }
    }
    await this.setState({QP: QP})
    await AsyncStorage.setItem("@QuizPaper",JSON.stringify(QP));
  }

  startQuiz(){
    console.log("Exam Start")
    let du = parseInt (this.state.QP.duration)
    let timeI = (du*60)
    Actions.push('m_quizMain',{
    QP:this.state.QP,
    subjectName:this.state.subjectName, 
    time: timeI,
    })
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
      <TouchableOpacity onPress={()=> Actions.pop()}>
      <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
        <Path
          fill="#43516f"
          d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
        />
      </Svg>
      </TouchableOpacity>
  
      </View>
      
      <View style={{height:"40%",marginTop:"0%", alignItems:"center"}}>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 24,
          "marginBottom":"5%",
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)"
        }
      } > Mock Test </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 18,
          "textAlign": "center",
          "color": "rgba(67, 81, 111, 255)"
        }
      } > Select Subject </Text>
      <DropDownPicker
        items={this.state.subjectList}
        containerStyle={{height: 50, width:150}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
        justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => this.setSubject(item.value)}
      />
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 18,
          "textAlign": "center",
          "color": "rgba(102, 107, 117, 255)",
          "marginTop": 12
        }
      } > Select Test </Text>
      <DropDownPicker
        items={this.state.titleList}
        containerStyle={{height: 50, width:150}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
        justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => this.setTitle(item.value)}
      />
      <View style={{flexDirection:"row",marginTop:"15%"}}>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > Name: </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > {this.state.QP.heading} </Text>    
      </View>
           
      <View style={{flexDirection:"row",marginTop:"5%"}}>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > Duration: </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > {this.state.QP.duration} Minutes </Text>
      </View>


      <View style={{flexDirection:"row",marginTop:"5%"}}>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > Questions: </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > {this.state.QP.totalQues} </Text>
      </View>
      
      <View style={{flexDirection:"row",marginTop:"5%"}}>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > Max. Marks: </Text>
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "#43516F"
        }
      } > {this.state.QP.totalmarks} </Text>
      </View>
      
      <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-evenly"}}>
      <TouchableOpacity onPress={()=>this.startQuiz()} contentContainerStyle={{shadowColor:"#3D73DD",shadowOffset: { width: 0, height: 14 },shadowOpacity:0.2, shadowRadius:48, elevation:14}}>
        <View style={{marginTop:"7%",padding:"2%"}}>
        <View style = {
        {
          "alignItems": "center",
          "paddingVertical":"9%",
          "width": 150,
          "height": 50,
          "borderRadius": 30,
          "backgroundColor": "rgba(60, 114, 219, 255)"
        }
      } >
      <Text style = {
        {
          "fontFamily": "Poppins-Medium",
          "fontSize": 16,
          "textAlign": "center",
          "color": "rgba(255, 255, 255, 255)"
        }
      } > Start Test </Text>
      </View>
  
        </View>
      
      </TouchableOpacity>
      </View>
      </View>
      
      </View>
    );
  };
  };
  export default M_QuizIntro;