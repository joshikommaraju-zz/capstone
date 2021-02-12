import React, {useState, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity , Alert
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Actions } from 'react-native-router-flux';
import Svg, { Path, Rect, G } from "react-native-svg"
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { Storage } from 'aws-amplify';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-community/async-storage';
import { YellowBox } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getStudentByUsername } from '../src/graphql/queries';
import DocumentPicker from 'react-native-document-picker';
import { Dimensions } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

const {width, height} = Dimensions.get('window');

class Home extends Component{
  constructor(props) {
    super(props);
    this.state={
      userData: "",
      userID: "",
      username: "",
      DBdata: {},
      slots: [],
      today : "",
      subjects:[],
      assignments:[{},{},{}],
      class:"",
      section: "",
      school: "",
    };
  }
  days = ["M","T","W","Th","F","S","Su"]
//@userdata = logindata
//@dbdata = query data from appsync
//first username from userdata for query
//replace username with name from query data(dbmonth)
  async componentDidMount() {
    console.log("Home Screen Entered")
    let usNa = await AsyncStorage.getItem("@userId");
    let userData = await AsyncStorage.getItem("@userData");
    let data = JSON.parse(userData);
    this.setState({userData : data})
    global.QUNA = usNa
    console.log("username",global.QUNA)
    const studentData = await API.graphql(graphqlOperation(getStudentByUsername, {username: global.QUNA}));
    let uuna = studentData.data.getStudentByUsername.name.split(" ")
    usNa = uuna[uuna.length-1]
    let DBd = studentData.data.getStudentByUsername
    //await AsyncStorage.setItem("@DBdata",JSON.stringify(DBd))
    //console.log("fetched data", DBd)
    await this.setState({
      userID:DBd.id ,
      DBdata:DBd,
      username: usNa, 
      school:DBd.school.schoolName,
      class:DBd.class, 
      section:DBd.section
    })
    //console.log("DB Data",this.state.DBdata)
    let s =[]
    for (let index = 0; index < DBd.classSection.subjects.items.length; index++) {
      let ts =[]
      let tts = []
      for (let index2 = 0; index2 < DBd.classSection.subjects.items[index].timetableSlots.items.length; index2++) {
        ts.push(DBd.classSection.subjects.items[index].timetableSlots.items[index2])
        tts.push(DBd.classSection.subjects.items[index].timetableSlots.items[index2])
      }
      let slRen = []
      while(ts.length) slRen.push(ts.splice(0,3));
      //console.log("rander array", slRen)
      //for card coloring
      let flagd =0;
      //console.log("slots",tts)
      var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var day = today.getDay() - 1
      let PT = (hours*100)+minutes
      for(let element of tts){
        if(element.day == this.days[day])
        {
        console.log("aubject name",element.subjectCode)
        let sT = element.time
        let eT = element.endtime
        let st = sT.split(" ")
        let et = eT.split(" ")
        let t1 = st[0].split(":")
        let t2 = et[0].split(":")
        let smi = parseInt(t1[1])
        let shi = null
        if(st[1] == "AM"){
          shi= parseInt(t1[0])
        } 
        else if (st[1] == "PM"){
          shi = parseInt(t1[0])
          if(shi!=12)
          {
            shi=shi+12
          }
        }
        let emi = parseInt(t2[1])
        let ehi = null
        if(et[1] == "AM"){
          ehi= parseInt(t2[0])
        } 
        else if (et[1] == "PM"){
          ehi = parseInt(t2[0])
          if(ehi != 12)
          ehi=ehi+12
        }
        let IT = (shi*100)+smi
        let ET = (ehi*100)+emi
        //console.log("IT",IT,"ET",ET,"PT",PT)
        if((PT>=IT) && (PT<ET)){
          flagd=1
        }
        else{
          flagd=0
        }
      }
    }
    //console.log("flagd",flagd)
      //console.log("final flag", flagd)
      let percentage = await AsyncStorage.getItem("@"+DBd.classSection.subjects.items[index].subjectCode)
      //percentage = parseInt (percentage)
      //console.log("percentage",percentage)
      let r ={
        flag: flagd,
        subName:DBd.classSection.subjects.items[index].subjectName,
        subCode:DBd.classSection.subjects.items[index].subjectCode,
        subjectId:DBd.classSection.subjects.items[index].id,
        slots: tts,
        slotsRen: slRen,
        conflink: DBd.classSection.subjects.items[index].timetableSlots.items[0].conflink,
        attenper: percentage,
        attendanceArr: DBd.attendance
      }
      //console.log("loop:",index, "ts:",tts)
      s.push(r)
    }
    let td = new Date().getDay() ;
    await this.setState({subjects: s, today:this.days[td-1]});
    console.log("today", this.state.today)
    this.getAssignments()
  }
  async getAssignments(){
    console.log("Getting Assignments")
    let arr =[]
    //console.log("assignment erro line",this.state.DBdata.classSection.subjects.items)
    let DBdsub = await this.state.DBdata.classSection.subjects.items
    let len = DBdsub.length
    //console.log("length ass subj",len)
     for (let index = 0; index < len; index++) {
      // console.log("u=inside subj",this.state.DBdata.classSection.subjects.items[index].subjectName)
      let max = 0
      let gind =0
      if( typeof(DBdsub[index].assignment.items[0]) !== "undefined" ){
      for (let j = 0; j < DBdsub[index].assignment.items.length; j++) {
       // console.log("looop:",j,"length of ass array",DBdsub[index].assignment.items.length)
        if((DBdsub[index].assignment.items[j].date).localeCompare(max) > 0){
          max= DBdsub[index].assignment.items[j].date
          gind = j;
        }
      }
      let r= {
        name: DBdsub[index].assignment.items[gind].name,
        notice: DBdsub[index].assignment.items[gind].notice,
        subCode: DBdsub[index].assignment.items[gind].subject.subjectCode,
        dueDate: DBdsub[index].assignment.items[gind].date,
        id: DBdsub[index].assignment.items[gind].id,
        uploadPDF:DBdsub[index].assignment.items[gind].uploadPDF,
      }
       arr.push(r)
    }
    }
     this.setState({assignments: arr})
     console.log("Assignments array",arr)
  }

  handeConf(data){
    let days = ["M","T","W", "Th", "F", "S","Su"]
    let inflag =0
    //console.log("go to conference",data)
    //console.log("class duration",data.slots[0])
    var joined = new Date();
    var hours = joined.getHours();
    var minutes = joined.getMinutes();
    var day = joined.getDay() - 1
    let PT = (hours*100)+minutes
    global.joinTime=PT;
    console.log("Going in",hours,minutes)
    //console.log("for loop",data.slots.length)
    for(let i=0; i<data.slots.length;i++){
      //console.log("slot",data.slots[i])
      if(data.slots[i].day == days[day])
      {
        let sT = data.slots[i].time
        let eT = data.slots[i].endtime
        let st = sT.split(" ")
        let et = eT.split(" ")
        let t1 = st[0].split(":")
        let t2 = et[0].split(":")
        let smi = parseInt(t1[1])
        let shi = null
        if(st[1] == "AM"){
          shi= parseInt(t1[0])
        } 
        else if (st[1] == "PM"){
          shi = parseInt(t1[0])
          if(shi!=12)
          shi=shi+12
        }
        let emi = parseInt(t2[1])
        let ehi = null
        if(et[1] == "AM"){
          ehi= parseInt(t2[0])
        } 
        else if (et[1] == "PM"){
          ehi = parseInt(t2[0])
          if(ehi != 12)
          ehi=ehi+12
        }
        let IT = (shi*100)+smi
        let ET = (ehi*100)+emi
        console.log("IT",IT,"ET",ET,"PT",PT)
        if((PT>=IT) && (PT<ET)){
          inflag=1
        }
      }
    }
    console.log("checking inflag")
    console.log("inclag state",inflag)
    if(inflag == 1){
      console.log("today",days[day])
      Actions.push('conference',{
        roomlink: data.conflink,
        username:this.state.username,
        userID: this.state.userID, 
        classData:data
      })
    }
    else{
      console.log("cannot go into class")
      showMessage({
        message: "It appears that you have no Class now!",
        autoHide:true,
        duration:3600,
        type: "danger",
      });
    }
  }


  handleProfile = () =>{
    console.log("go to Profile page");
    Actions.push('profile',{subData: this.state.subjects})
  }

  handleUtilities = () =>{
    console.log("go to utilities page");
    Actions.push('utilities',{DBdata: this.state.DBdata})
  }

  async handleUpload(assignName,subjectCode,assid,dueDate){
    console.log("upload pressed");
      try{
        let uplname = this.state.school+'/'+this.state.class+'/'+this.state.section+'/'+subjectCode+'/'+this.state.school+'_'+subjectCode+'_'+assignName+'_'+this.state.class+'_'+this.state.section+'_'+this.state.userID+'.pdf';
        //let uplname= subjectCode+'.pdf'
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          //There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        const response = await fetch(res.uri)
        const blob = await response.blob();
        //console.log(uplname);
        let key = await Storage.put(uplname ,blob, {
          level:'public',
          contentType: 'text/plain',
          progressCallback(progress) {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        });  
        console.log("upload name", uplname) 
        showMessage({
          message: "File Uploaded!",
          autoHide:true,
          duration:1800,
          type: "success",
        });
        let DBd= this.state.DBdata.classSection.subjects.items
        for(let i =0; i<DBd.length; i++){
          if (DBd[i].subjectCode == subjectCode){
            let assignM = DBd[i].assignment.items
            for(let j =0; j<assignM.length; j++){
              console.log("upload shift",assignM[j].marks)
              if(assignM[j].id == assid){
                if(assignM[j].marks.items[0] == null){
                  console.log("Marks Created")
                  await API.graphql(graphqlOperation(createMarks, {input:{
                    type:"Assignment",
                    name: assignName,
                    date: dueDate,
                    subjectCode:subjectCode,
                    maxMarks:0,
                    marksObtained:0,
                    marksAssignmentId:assid,
                    marksStudentId: this.state.userID
                  }}));
                  const studentData = await API.graphql(graphqlOperation(getStudentByUsername, {username: global.QUNA}));
                  this.setState({DBdata: studentData.data.getStudentByUsername})
                }
                else{
                  console.log("No Mark created")
                }
              }
            }
          }
        }   
      }
      catch(error){
        if (DocumentPicker.isCancel(error)) {
          showMessage({
            message: "No file selected!",
            autoHide:true,
            duration:1800,
            type: "danger",
          });
        }
        else{
          console.log(error)
          alert('Unknown Error: ' + JSON.stringify(error));
          showMessage({
            message: "Unable to Upload!",
            autoHide:true,
            duration:1800,
            type: "success",
          });
          throw error;
        }
      }
    }

    async handleDownload(assignName,subjectCode,id){
      console.log("Download pressed");
        let uplname = this.state.school+'/'+this.state.class+'/'+this.state.section+'/'+subjectCode+'/'+this.state.school+'_'+subjectCode+'_'+assignName+'_'+this.state.class+'_'+this.state.section+'_'+this.state.userID+'.pdf';
        const down = await Storage.get(uplname, { level: 'public', /*download :true ,  contentType: 'text/plain'*/})
        console.log("URI", down)
        const { dirs } = RNFetchBlob.fs;
        RNFetchBlob.config({
          fileCache: true,
          addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          description : 'Downloading Assignemnt.',
          mime: 'application/pdf',
          mediaScannable: true,
          title: `${subjectCode}_${assignName}.pdf`,
          path: `${dirs.DownloadDir}/${subjectCode}_${assignName}.pdf`,
          },
        })
          .fetch('GET', down, {})
          .then((res) => {
            console.log('The file saved to ', res.path());
            showMessage({
              message: "Downloaded!",
              autoHide:true,
              duration:1800,
              type: "success",
            });
          })
          .catch((e) => {
            console.log(e)
            showMessage({
              message: "Unable to dowwnload!",
              autoHide:true,
              duration:1800,
              type: "danger",
            });
          });
          
      
        
        /*catch(error){
          console.log('download error:',error);
        }
        */
    }

    async handleRemove(assignName,subjectCode){
      console.log("delete Pressed");
      let uplname = this.state.school+'/'+this.state.class+'/'+this.state.section+'/'+subjectCode+'/'+this.state.school+'_'+subjectCode+'_'+assignName+'_'+this.state.class+'_'+this.state.section+'_'+this.state.userID+'.pdf';
      try{
        const del = await Storage.remove(uplname, { level: 'private' })
        showMessage({
          message: "Removed Succesfully!",
          autoHide:true,
          duration:1800,
          type: "success",
        });
        }
        catch(error){
          console.log('delete error:',error)
        }
    }



 render(){

  return (
    
    <View style = {{"alignItems": "center", backgroundColor:"#F8F8F8","flex": 1, "flexDirection":"column"}} >
    
     <View style = {
      {
        "alignItems": "flex-start",
        "justifyContent":"space-between",
        "paddingTop": height*0.06,
        "flex": 1,
        "flexDirection":"row",
        paddingLeft:"10%",
        paddingRight:"10%",
        width:width,
        height:height
      }
    } >
    <View>
      
    </View>
    <View>
    
    </View>
    </View>
    
     <View style={{alignItems:"flex-start",height:height*0.1, width:width, paddingLeft:"10%"}}>
    <Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Regular",
        "textAlign":"left",
        "fontSize": height*0.027,
        "color": "rgba(102, 107, 117, 255)"
      }
    } > Hello, </Text>
    <Text style={{"fontFamily":"Poppins-Medium","fontSize":height*0.035,"color":"#9E9A35"}}>{this.state.username}</Text >
    </Text>
    </View>
    <View style={{height:height*0.7,width:width,justifyContent:"space-around"}}>
    <ScrollView showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{flexGrow:1,height:"60%",width:"100%",paddingLeft:"10%"}} horizontal={true}>
      {this.state.subjects.map((data,key)=>(
      
      <View style = {{"flexDirection": "row","alignItems": "flex-start", marginRight:30}} >
        <View style={
          (data.flag === 1)?
          {"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.73,"height": width*0.68,"borderRadius": 0,"backgroundColor": "rgba(61, 115, 221, 255)",shadowColor:"#3D73DD",shadowOffset: { width: 25, height: 4 },shadowOpacity:0.3, shadowRadius:48, elevation:8}
          
          :

          {"alignItems": "flex-start","paddingStart": "10%","paddingTop": "7%","marginTop": "10%","width": width*0.73,"height": width*0.68,"borderRadius": 0,"backgroundColor": "rgba(255, 255, 255, 255)",shadowColor:"#3D73DD",shadowOffset: { width: 25, height: 4 },shadowOpacity:0.3, shadowRadius:48, elevation:8}

          }>
          
          <TouchableOpacity 
            onPress={()=>Actions.push('subject',{ 
              usNa: this.state.username,
              sessions: data.slots,
              subjectName: data.subName, 
              subjectCode : data.subCode,
              school:this.state.DBdata.school.schoolName,
              class:this.state.DBdata.class,
              section:this.state.DBdata.section,
              percentage: data.attenper,
              keVa: key,
            })}>
           <Text style = {
            (data.flag === 1)?
            {"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": height*0.025,"color": "#FFF","width":"90%","marginTop": "10%"}
            :
            {"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": height*0.025,"color": "#43516F","width":"90%","marginTop": "10%"} 
          }>
            {data.subName}
          </Text>
          <Text style = {
            (data.flag === 1)?
            {"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": height*0.020,"color": "#FFF","width":"90%","marginTop": "2%","marginTop":"2%"}
            :
            {"fontFamily": "Poppins-Medium","paddingLeft":"5%","fontSize": height*0.020,"color": "#43516F","width":"90%","marginTop": "2%","marginTop":"2%"}
            } >
          {data.subCode}
          </Text>
          </TouchableOpacity>
          
          
        </View>
      </View>
      ))}      
      <View style={{marginRight:30}}></View>
    
    </ScrollView>
    <View style={{paddingLeft:"10%", height:height*0.05}}>
      <Text style={{"fontFamily":"Poppins-Medium","marginTop":"3%","fontSize":height*0.03,"color":"rgba(67, 81, 111, 255)"}}>Assignment</Text >
    </View>
    <ScrollView style={{height:height*0.2,paddingLeft:"10%",width:width,marginTop: "2%"}}>
      {this.state.assignments.map((data,key)=>(
    
        <Swipeable rightButtons={
          
          [
            <TouchableOpacity onPress= {()=>this.handleUpload(data.name,data.subCode,data.id)} style={{marginTop:"8%"}}>
              <View>
              <Svg width={38} height={38} viewBox="0 0 38 38">
                <G transform="translate(6.11 -45.699)">
                  <Rect
                    width={38}
                    height={38}
                    fill="#3d73dd"
                    data-name="Rectangle 15"
                    rx={19}
                    transform="translate(-6.11 45.699)"
                  />
                  <G data-name="Group 6">
                    <G fill="#f8f8f8" data-name="Group 5">
                      <Path
                        d="M19.09 62.394a6.007 6.007 0 00-7.275-4.251 5.893 5.893 0 00-4.52 5.252 3.2 3.2 0 00-2.694 3.669 3.248 3.248 0 003.24 2.669h2.725v-1.06H7.841a2.129 2.129 0 110-4.257.539.539 0 00.545-.532 4.848 4.848 0 014.9-4.793 4.877 4.877 0 014.818 3.862.54.54 0 00.463.426 2.672 2.672 0 012.314 3.009 2.7 2.7 0 01-2.684 2.285h-2.18v1.06h2.18a3.716 3.716 0 00.894-7.342z"
                        data-name="Path 15"
                      />
                      <Path
                        d="M12.838 63.518l-2.563 2.563.9.9 1.474-1.467v6.145h1.282v-6.141l1.467 1.467.9-.9-2.56-2.567a.641.641 0 00-.9 0z"
                        data-name="Path 16"
                      />
                    </G>
                  </G>
                </G>
              </Svg>
              </View>
            </TouchableOpacity>,
            <TouchableOpacity onPress= {()=>this.handleDownload(data.name,data.subCode,data.id)} style={{marginTop:"8%"}}>
              <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <G transform="translate(6.11 -45.699)">
                  <Rect
                    width="38"
                    height="38"
                    fill="#43516f"
                    data-name="Rectangle 15"
                    rx="19"
                    transform="translate(-6.11 45.699)"
                  ></Rect>
                  <G data-name="Group 6" transform="translate(4.557 56.965)">
                    <G fill="#f8f8f8" data-name="Group 5">
                      <Path
                        d="M14.533 59.461a6.007 6.007 0 00-7.275-4.251 5.893 5.893 0 00-4.52 5.252 3.2 3.2 0 00-2.694 3.669 3.248 3.248 0 003.24 2.669h2.725v-1.06H3.284a2.129 2.129 0 110-4.257.539.539 0 00.545-.532 4.848 4.848 0 014.9-4.793 4.877 4.877 0 014.818 3.862.54.54 0 00.463.426 2.672 2.672 0 012.314 3.009 2.7 2.7 0 01-2.684 2.285h-2.18v1.06h2.18a3.716 3.716 0 00.894-7.342z"
                        data-name="Path 15"
                        transform="translate(0 -55.032)"
                      ></Path>
                      <Path
                        d="M183.6 249.2l-2.563 2.563.9.9 1.474-1.467v6.145h1.282V251.2l1.467 1.467.9-.9-2.56-2.567a.641.641 0 00-.9 0z"
                        data-name="Path 16"
                        transform="rotate(180 96.39 132.352)"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              </View>
            </TouchableOpacity>,
            
          ]

        } rightActionActivationDistance={15} rightButtonWidth={60}>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "justifyContent":"space-around",
        "marginVertical":"5%",
        "width": width*0.8,
        "height": height*0.09,
        "borderRadius": 15,
        "backgroundColor": "rgba(233, 237, 241, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "marginVertical":"7%",
        "fontSize": height*0.02,
        "color": "rgba(67, 81, 111, 255)",
        "textAlignVertical":"center"
      }
    } > {data.name} </Text>
    <View style = {
      {
        "alignItems": "flex-end",
        "marginVertical":"3%",
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": height*0.02,
        "textAlign": "center",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > {data.subCode} </Text>
    <Text style = {
      {
        "fontFamily": "Poppins-Medium",
        "fontWeight": "400",
        "fontSize": height*0.02,
        "textAlign": "right",
        "color": "rgba(67, 81, 111, 255)",
      }
    } > {data.dueDate} </Text>
    </View>
    </View>
    </Swipeable>
    ))}

    </ScrollView>
    </View>
    </View>

  )
};
};

export default Home;