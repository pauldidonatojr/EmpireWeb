import React, { useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  KeyboardAwareScrollView,
} from "react-native";
import { Button, Overlay, ListItem, Card, Avatar } from "react-native-elements";
import Footer from "../Footer";
// Import vector icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Octicons";

import Icon4 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/Feather";
import Icon7 from "react-native-vector-icons/Ionicons";

var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const PatientDetail = ({ navigation }) => {
  const PatientInfo = () => {
    setIndex(3);
  };
  const careGiver = () => {
    setIndex(4);
  };
  const renderViews = ({ navigation }) => {
    switch (index) {
      case 3:
        return PatientInfoView({ navigation });
      case 4:
        return CareGiverView({ navigation });
    }
  };

  const PatientInfoView = () => {
    return (
      <View>

      <Card
        containerStyle={{
          borderRadius: 15,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height:450
        }}
      >
        <Text style={{ fontSize: 25, color: "#012030",fontWeight:"bold" }}>
          Contact Information
        </Text>
        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon6 
            style={styles.phone}
                name="phone"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"(077) 5687745"}
        </Text>
        </View>
        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon6 
            style={styles.phone}
                name="phone"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"(077) 5687745"}
        </Text>
        </View>
        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon6 
            style={styles.phone}
                name="phone"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"(077) 5687745"}
        </Text>
        </View>



        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon7
            style={styles.phone}
                name="location-outline"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"Upper Tooting Road, SW1D17"}
        </Text>
        </View>
        <Text style={{ marginTop:"3%", fontSize: 25, color: "#012030", marginLeft: "05%",fontWeight:"bold" }}>
          Emergency Contact
        </Text>

        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon6 
            style={styles.phone}
                name="phone"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"(077) 5687745"}
        </Text>
        </View>
        <View
        style={{flexDirection:"row",marginTop:"5%"}}>
          <Icon6 
            style={styles.phone}
                name="phone"
                size={25}
                color={"black"}
            />
        <Text style={{ fontSize: 15, color: "#012030" }}>
          {"(077) 5687745"}
        </Text>
        </View>
      </Card>

    </View>
    );
  };
  const list = [
    {
      name: "Wanda De Martinez",
      address: "262A Upper tooting road, SWDN17",
      ExpectedClockin: "07:30 AM",
      ExpectedClockOut: "11 : 30 AM",
    },
    {
      name: "Wanda De Martinez",
      address: "262A Upper tooting road, SWDN17",
      ExpectedClockin: "07:30 AM",
      ExpectedClockOut: "11 : 30 AM",
    },
    {
      name: "Wanda De Martinez",
      address: "262A Upper tooting road, SWDN17",
      ExpectedClockin: "07:30 AM",
      ExpectedClockOut: "11 : 30 AM",
    },
    {
      name: "Wanda De Martinez",
      address: "262A Upper tooting road, SWDN17",
      ExpectedClockin: "07:30 AM",
      ExpectedClockOut: "11 : 30 AM",
    },
  ];
  const InfoIconPressed=()=>{

    if(!infoIcon){
      setVisitIcon(false);
      setInfoIcon(!infoIcon);
    }

}
  const CareGiverView = ({ navigation }) => {
    return (
      <ScrollView>
            {list.map((l, i) => (
      <TouchableOpacity  onPress={() => {
        navigation.navigate('VisitDetails')
    }}>
        
        <ListItem key={i} bottomDivider style={styles.ListItem}>
            
    <ListItem.Content style={{backgroundColor:"#3F7C85",padding:10,borderRadius:5}}>
    <View>
                <Icon4
                  style={styles.arrowIcon}
                  name="arrowright"
                  size={25}
                  color={"white"}
                ></Icon4>
              </View>
              <ListItem.Title style={{color:"white",fontSize:25}}>{l.name}</ListItem.Title>
              <ListItem.Subtitle>
                {" "}
                <Text style={{color:"white"}}>Address:  {l.address}</Text>
              </ListItem.Subtitle>

              <ListItem.Subtitle>
                {" "}
                <Text style={{color:"white"}}>Date : {date}:{month}:{year}</Text>
              </ListItem.Subtitle>

              <ListItem.Subtitle>
                {" "}
                <Text style={{color:"white"}}>Expected Clock In: {l.ExpectedClockin} </Text>
              </ListItem.Subtitle>

              <ListItem.Subtitle>
                {" "}
                <Text style={{color:"white"}}>Expected Clock Out: {l.ExpectedClockOut} </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
      </TouchableOpacity>
    ))}
    </ScrollView>
    );
  };
  const [index, setIndex] = useState(0);
  const [VisitIcon, setVisitIcon] = useState(false);
  const [infoIcon, setInfoIcon] = useState(false);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* Header */}
      <View style={{ width: "100%", height: "10%" }}>
        {/* Greetings */}
        <View style={styles.greetings}>
          <Text style={{ fontSize: 25, color: "#1B365C" }}>Hi,</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1B365C" }}>
            {" "}
            Hector
          </Text>
        </View>
        {/* Agency Name */}
        <View style={styles.agency}>
          <Text style={{ fontSize: 20, color: "#1B365C" }}>
            Empire Home Care Agency LLC.
          </Text>
        </View>
      </View>

      <View style={styles.iconholder}>
        {/*Clockin and Clock out Icon*/}
        <TouchableOpacity style={styles.iconbody}>
          <Icon3
            style={infoIcon ? styles.trueInfo : styles.falseInfo}
            name="info"
            size={40}
            onPress={() => {
              PatientInfo();
              InfoIconPressed();
            }}
          ></Icon3>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Patient Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconbody}>
          <Icon2
            style={styles.icon}
            name="tasks"
            size={40}
            color={"#012030"}
            onPress={careGiver}
          ></Icon2>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Visits</Text>
        </TouchableOpacity>
      </View>

      {renderViews({ navigation })}
    </View>
  );
};

const styles = StyleSheet.create({
  greetings: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  dataDiv: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  adressContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#012030",
    width: "100%",
    height: "40%",
  },
  agency: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  clockInOutHolder: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
  },
  ClockInBtn: {
    color: "white",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#012030",
    color: "white",
    marginTop: "2%",
    borderRadius: 10,
  },
  ClockOutBtn: {
    color: "white",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#012030",
    color: "white",
    height: "50%",
    marginTop: "2%",
    borderRadius: 10,
  },
  clockIn: {
    marginTop: "5%",
    marginLeft: "5%",
    height: "80%",
    width: "40%",
    backgroundColor: "#13678A",
    padding: 10,
    borderRadius: 10,
  },
  clockOut: {
    marginTop: "5%",
    marginLeft: "10%",
    height: "80%",
    width: "40%",
    backgroundColor: "#13678A",
    padding: 10,
    borderRadius: 10,
  },
  actionsHolder: {
    width: "100%",
    height: "10%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userHeaderButtons: {
    width: "100%",
    height: "10%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "75%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#1B365C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  filterHolder: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconbody: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "70%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#1B365C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  tableHolder: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    width: "90%",
    height: 300,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: "white",
  },
  selectorScrollView: {
    position: "relative",
    width: "100%",
    height: "55%",
    marginTop: "10%",
  },
  arrowIcon:{
    marginLeft:"93%",
        position:"absolute"
  },
  iconholder: {
    flexDirection: "row",
    padding: 5,
  },
  trueInfo:{
    color:"#84B026",
  },
  falseInfo:{
    color:"#012030",
  },
});

export default PatientDetail;
