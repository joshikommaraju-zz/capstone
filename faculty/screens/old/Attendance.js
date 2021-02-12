import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  render
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G, Circle } from "react-native-svg"
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';



class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state={
      keyVal: null,
      subject: "",
      subjectName: "",
      subjectCode: "",
      total: '15',
      months: [["Jan", "Feb", "Mar", "Apr", "May", "Jun"],[ "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]],
      calendar: [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31]],
      attended: [[0,1,1,0,1,0,1],[1,0,0,1,1,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[0,0,0]] ,
      teachAttended: [[1,1,1,1,1,1,1],[1,0,0,1,1,1,1],[1,1,1,1,1,0,1],[1,0,1,1,1,1,1],[1,1,1]] ,
      progress: '',
      username: global.username,
      date: new Date().getDate(),   
      selMonth: null,   
    };
  }

  async componentDidMount(){
    //console.log("data on prop",this.props.subjectName )
    let keVa = this.props.keVa
    let today = new Date().getDay() -1;
    let month = new Date().getMonth();
    let div= (this.state.attended.length/this.state.total)
    this.setState({keyVal:keVa,thisMonth: month, thisDay:today, progress: div.toFixed(1), subjectCode: this.props.subjectCode})
    this.setState({subjectName: this.props.subjectName, subjectCode: this.props.subjectCode})
  }

  async calStu(){
    let su = this.state.DBdata.classSection.subjects.items[this.state.keyVal].attendance;
    



    
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
    <TouchableOpacity onPress={()=>Actions.pop()}>
    <Svg width={48} style={{marginTop:"-40%"  }} height={40} rotation={180} viewBox="0 0 30 30">
      <Path
        fill="#43516f"
        d="M.833 9.168h16.622l-6.363 6.063a.834.834 0 001.15 1.207l7.268-6.927a1.658 1.658 0 00-.01-2.367L12.246.231a.834.834 0 00-1.15 1.207l6.392 6.063H.838a.833.833 0 100 1.667z"
      />
    </Svg>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>Actions.notifications()}>
    <Svg width={40} height={38} viewBox="0 0 20 29">
          <Path
            fill="#43516f"
            d="M15.734 11.453v-4.48a6.963 6.963 0 10-13.925 0v4.48l-1.81 3.575h17.589z"
            data-name="Path 1"
          />
          <Path
            fill="#43516f"
            d="M5.826 16.065a2.935 2.935 0 105.87 0z"
            data-name="Path 2"
          />
    </Svg>
    </TouchableOpacity>
    
    </View>
    
    <View style={{height:"80%",marginTop:"5%", alignItems:"center"}}>
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
    <TouchableOpacity>
    <View style={{alignItems:"flex-start",paddingLeft:"5%", marginTop:"10%", flexDirection:"row",marginLeft:"-5%"}}>
            <Progress.Bar progress={this.state.progress} width={200} height={10} borderRadius={20} color={'#3FDF64'} borderColor={'rgba(108, 92, 189,0)'} unfilledColor={'#E9EDF1'}>
            </Progress.Bar>
            <View style={{"alignItems":"center",marginTop:"-7%",marginLeft:"7%","justifyContent":"center","paddingTop": "2%","width": 40,"height": 40,"borderRadius": 7,"backgroundColor": "#E9EDF1"}}>
              <Text style = {{"fontFamily": "Poppins-Regular","padding":"2%","fontSize": 14,"textAlign": "center","textAlignVertical":"center","color": "#43516F"}} >
              {this.state.progress*100}
              </Text>
            </View>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:"row",marginTop:"7%",justifyContent:"space-around"}}>
    <View style = {
      {
        "alignItems": "center",
        "marginHorizontal":"5%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Total </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(60, 114, 219, 255)",
        "marginTop": 10
      }
    } > {this.state.total} </Text>
    </View>
    <View style = {
      {
        "alignItems": "center",
        "marginHorizontal":"5%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attended </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": 18,
        "textAlign": "center",
        "color": "rgba(63, 223, 100, 255)",
        "marginTop": 10
      }
    } > {this.state.attended.length} </Text>
    </View>
    
    </View>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontSize": 24,
        "marginTop":"10%",
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)"
      }
    } > Attendance Log </Text>
    
    <View style = {
      {
        "alignItems": "center",
        "marginTop":"5%"
      }
    } >
    {this.state.months.map((item,key1)=>(
      <View style = {
        {
          flexDirection: 'row',
          alignItems: 'flex-start'
        }
      } > 
      {item.map((item2,key2)=>(
        <View>
        <TouchableOpacity onPress = {()=> this.handleChangeMonth(key1,key2)}><Text style = {
          {
            "fontFamily": "Poppins-Medium",
            "fontSize": 14,
            "textAlign": "center",
            "marginHorizontal":"2%",
            "color": "rgba(67, 81, 111, 255)"
          }
        } > {item2} </Text></TouchableOpacity>
        </View>
      ))}
      </View>
    ))}


    <View style = {
      {
        "alignItems": "center",
        "marginTop":"2%"
      }
    } >
      {this.state.calendar.map((data,key)=> (

<View style = {
  {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop":"3%"
  }
} >
{data.map((data2,key2)=> ( 
<TouchableOpacity>
<View style = {
  {
    "alignItems": "center"
  }
} >
<View style = {
  this.state.date>=data2?
  this.state.teachAttended[key][key2]==1?
  this.state.attended[key][key2]==1?
  {
    "alignItems": "center",
    "paddingTop": 2,
    "width": 30,
    "height": 30,
    "borderRadius": 5,
    "borderWidth": 1,
    "marginHorizontal":"2%",
    "borderColor": "rgba(63, 223, 100, 255)"
  }:{
    "alignItems": "center",
    "paddingTop": 2,
    "width": 30,
    "height": 30,
    "borderRadius": 5,
    "borderWidth": 1,
    "marginHorizontal":"2%",
    "borderColor": "#eb5f5f"
  }:{
    "alignItems": "center",
    "paddingTop": 2,
    "width": 30,
    "height": 30,
    "borderRadius": 5,
    "borderWidth": 1,
    "marginHorizontal":"2%",
    "borderColor": "#43516f"
  }:{
    "alignItems": "center",
    "paddingTop": 2,
    "width": 30,
    "height": 30,
    "borderRadius": 5,
    "borderWidth": 1,
    "marginHorizontal":"2%",
    "borderColor": "#c8cacc"
  }
} >
<Text style = {
  this.state.date>=data2?
  this.state.teachAttended[key][key2]==1?
  this.state.attended[key][key2]==1?
  {
    "fontFamily": "Poppins-Medium",
    "fontSize": 15,
    "textAlign": "center",
    "color": "rgba(63, 223, 100, 255)"
  }:{
    "fontFamily": "Poppins-Medium",
    "fontSize": 15,
    "textAlign": "center",
    "color": "#eb5f5f"
  }:{
    "fontFamily": "Poppins-Medium",
    "fontSize": 15,
    "textAlign": "center",
    "color": "#43516f"
  }:{
    "fontFamily": "Poppins-Medium",
    "fontSize": 15,
    "textAlign": "center",
    "color": "#c8cacc"
  }
} > {data2} </Text>
</View>
</View>
</TouchableOpacity>

))}    
</View>
))}


</View>
</View>
</View>
</View>
);
};
};
export default Attendance;


