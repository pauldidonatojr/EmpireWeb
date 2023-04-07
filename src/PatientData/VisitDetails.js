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
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/Feather";
import Icon7 from "react-native-vector-icons/Ionicons";




var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const VisitDetails = ({ navigation }) => {
  const ClockinOutPressed = () => {
    setIndex(1);
  };
  const Direction = () => {
    setIndex(2);
  };
  const PatientInfo = () => {
    setIndex(3);
  };
  const renderViews = () => {
    switch (index) {
      case 1:
        return ClockinClockOutView();
      case 2:
        return DirectionView();
      case 3:
        return PatientInfoView();
      case 4:
        return CareGiverView();
    }
  };

  const List1Expanded = () => {
    if (expanded == false) {
      setExpanded2(false);
    }
    setExpanded(!expanded);
  };
  const List2Expanded = () => {
    if (expanded2 == false) {
      setExpanded(false);
    }
    setExpanded2(!expanded2);
  };

  const ClockIconPressed=()=>{
    if(!cloockInOut){
      setClockInOut(!cloockInOut);
        setDirectionIcon(false);
        setInfoIcon(false);
  
    }
  }
  const DirectionIconPressed=()=>{
    
  if(!DirectionIcon){
    setClockInOut(false);
    setDirectionIcon(!DirectionIcon)
    setInfoIcon(false);
  }
  }

  const InfoIconPressed=()=>{

      if(!infoIcon){
        setClockInOut(false);
        setDirectionIcon(false);
        setInfoIcon(!infoIcon);
      }

  }


  const showList1Data = () => {
    return (
      <View style={{ margin: "10%" }}>
        {list1.map((l, i) => (
          <View>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Subtitle> {l.id}</ListItem.Subtitle>

                <ListItem.Subtitle> {l.task}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
        ))}
      </View>
    );
  };
  const showList2Data = () => {
    return (
      <ScrollView style={{ margin: "10%" }}>
        {list1.map((l, i) => (
          <View>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Subtitle> {l.id}</ListItem.Subtitle>

                <ListItem.Subtitle> {l.task}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
        ))}
      </ScrollView>
    );
  };
  const list1 = [
    {
      id: "222",
      task: "Clean Room",
    },
    {
      id: "215",
      task: "Washing dishes",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
    {
      id: "125",
      task: "Changing sheets",
    },

    {
      id: "125",
      task: "Changing sheets",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
  ];
  const list2 = [
    {
      id: "222",
      task: "Clean Room",
    },
    {
      id: "215",
      task: "Washing dishes",
    },
    {
      id: "125",
      task: "Changing sheets",
    },
  ];
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  

  const ClockinClockOutView = () => {
    return (
      <View>
        <View style={styles.clockInOutHolder}>
          <View style={styles.clockIn}>
            <Text style={{ fontSize: 20, marginLeft: "30%", color: "white" }}>
              03/01
            </Text>
            <Text style={{ fontSize: 20, marginLeft: "20%", color: "white" }}>
              07:30 AM
            </Text>
            <TouchableOpacity onPress={toggleOverlay} style={styles.ClockInBtn}>
              <Text style={{ fontSize: 25, color: "white" }}>Clock In</Text>
            </TouchableOpacity>

            <Overlay
              overlayStyle={{
                borderRadius: 15,
                width: "90%",
                height: "50%",
                padding: "10%",
              }}
              isVisible={visible}
              onBackdropPress={toggleOverlay}
            >
              <Icon4
                style={styles.crossicon}
                name="cross"
                size={25}
                onPress={toggleOverlay}
              ></Icon4>
              <View
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: "40%",
                    padding: 1,
                    width: "75%",
                    marginLeft: "1%",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    backgroundColor: "#012030",
                  }}
                >
                  <Text style={{ fontSize: 25, color: "white" }}>GPS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: "10%",
                    height: "40%",
                    padding: 1,
                    width: "75%",
                    marginLeft: "1%",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    backgroundColor: "#012030",
                  }}
                >
                  <Text style={{ fontSize: 25, color: "white" }}>
                    Security Token
                  </Text>
                </TouchableOpacity>
              </View>
            </Overlay>
          </View>

          <View style={styles.clockOut}>
            <Text style={{ fontSize: 20, marginLeft: "30%", color: "white" }}>
              03/01
            </Text>
            <Text style={{ fontSize: 20, marginLeft: "20%", color: "white" }}>
              11:30 AM
            </Text>
            <TouchableOpacity
              style={styles.ClockOutBtn}
              onPress={toggleOverlay}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Clock Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={styles.expandablelist}>
            <TouchableOpacity onPress={List1Expanded}>
              <Icon5 
              style={styles.arrowIcon}
                  name="arrowdown"
                  size={25}
                  color={"white"}
              />
              <Text style={{ fontSize: 15, color: "white" }}>
                Plan of Care Task
              </Text>
            </TouchableOpacity>
            
          </View>
          <View style={{ flex: 10, width: "100%", height: "100%" }}>
            {expanded ? showList1Data() : null}
          </View>

          <View style={styles.expandablelist2}>
            <TouchableOpacity onPress={List2Expanded}>
            <Icon5 
              style={styles.arrowIcon2}
                  name="arrowdown"
                  size={25}
                  color={"white"}
              />
              <Text style={{ fontSize: 15, color: "white" }}>Other Task</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 10, height: "100%", width: "100%" }}>
            {expanded2 ? showList2Data() : null}
          </View>
        </ScrollView>
      </View>
    );
  };

  const DirectionView = () => {
    return (
      <View>
        <View style={styles.adressContainer}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Primary Address{" "}
          </Text>
          <TouchableOpacity
            style={{
              alignContent: "center",
              textAlign: "center",
              backgroundColor: "#13678A",
              borderRadius: 15,
              padding: 1,
              height: "25%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              6330 BINGHAM ST, PHILADALPHIA, PA, 1911
            </Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    );
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
  const [index, setIndex] = useState(0);

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [cloockInOut, setClockInOut] = useState(false);
  
  const [DirectionIcon, setDirectionIcon] = useState(false);

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
          <Icon
            style={cloockInOut ? styles.trueBrief : styles.falseBrief}
            name="briefcase-clock-outline"
            size={40}
            onPress={() => {
              ClockinOutPressed();
              ClockIconPressed();
            }}
          ></Icon>
          <Text
            style={{ fontSize: 13, textAlign: "center", fontWeight: "bold" }}
          >
            Clock In / Clock Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconbody}>
          <Icon2
            style={DirectionIcon ? styles.trueDirection : styles.falseDirection}
            name="directions"
            size={40}
            onPress={() => {
              Direction();
              DirectionIconPressed();
            }}
          ></Icon2>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Direction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconbody}>
          <Icon3
             style={infoIcon ? styles.trueinfo : styles.falseinfo}
            name="info"
            size={40}
            
            onPress={() => {
              PatientInfo();
              InfoIconPressed();
            }}
          ></Icon3>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>Patient Info</Text>
        </TouchableOpacity>
      </View>

      {renderViews()}
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
  expandablelist: {
    backgroundColor: "#012030",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    height: 40,
    width: "90%",
    borderRadius: 10,
    marginLeft: "5%",
  },
  expandablelist2: {
    backgroundColor: "#012030",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    height: 40,
    width: "90%",
    marginTop: "2%",
    borderRadius: 10,
    marginLeft: "5%",
  },
  adressContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#012030",
    width: "100%",
    height: "60%",
  },
  crossicon: {
    marginLeft: "90%",
    color: "black",
    marginTop: 0,
    marginBottom: 15,
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
    height: 235,
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
    height: "44%",
    marginTop: "2%",
    borderRadius: 10,
  },
  clockIn: {
    marginTop: "5%",
    marginLeft: "5%",
    height: "70%",
    width: "40%",
    backgroundColor: "#13678A",
    padding: 10,
    borderRadius: 10,
  },
  clockOut: {
    marginTop: "5%",
    marginLeft: "10%",
    height: "70%",
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
  arrowIcon:{
    marginLeft:"60%",
    position:"absolute"
  },
  arrowIcon2:{
    marginLeft:"53%",
    position:"absolute"
  },
  iconbody: {
    width: "33.33%",
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
  iconholder: {
    flexDirection: "row",
    padding: 15,
    backgroundColor:"white",
    borderRadius:30,

  },
  trueBrief:{
    
    color:"#84B026",
  },
  falseBrief:{
    color:"#012030",
  },
  trueDirection:{
    color:"#84B026",
  },
  falseDirection:{
    color:"#012030",
  },
  trueinfo:{
    color:"#84B026",
    
  },
  falseinfo:{
    color:"#012030",
  
  },
  phone:{
    marginRight:"10%"
  }
});

export default VisitDetails;
