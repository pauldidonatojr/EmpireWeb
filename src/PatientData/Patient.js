import React, { useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  KeyboardAwareScrollView,
} from "react-native";
import Footer from "../Footer";
// Import vector icons
import Icon from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Ionicons";


var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const Patient = ({ navigation }) => {
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

      {/* Notifications Part */}
      <View style={styles.actionsHolder}>
        <View
          style={{ width: "50%", height: "100%", alignItems: "flex-start" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Notifications</Text>
          </View>
        </View>
        <View style={{ width: "50%", height: "100%", alignItems: "flex-end" }}>
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Menu</Text>
          </View>
        </View>
      </View>

      {/*  */}

      <View style={styles.filterHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("TodaySchedule");
          }}
        >
          <Icon name="date" color="white" size={20}></Icon>
          
          <Text style={{ color: "white", fontSize: 25 }}>
            Today's Schedule
          </Text>
          {<Text style={{ color: "white", fontSize: 15 }}>Visit Scheduled for {<Text>{date} : {month} : {year}</Text>}</Text>} 
        </TouchableOpacity>
      </View>

      <View style={styles.filterHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("UnScheduleVisits");
          }}
        >
          <Icon2 name="date-range" color="white" size={20}></Icon2>
          
          <Text style={{ color: "white", fontSize: 25 }}>
            Un-Scheduled Visits
          </Text>
          {<Text style={{ color: "white", fontSize: 15 }}>Visits not scheduled on calender</Text>}
          
        </TouchableOpacity>
      </View>

      <View style={styles.filterHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Visits");
          }}
        >
          
          <Icon3 name="md-file-tray-full-sharp" color="white" size={20}></Icon3>
          <Text style={{color: "white", fontSize: 25 }}>Visits</Text>
          {<Text style={{ color: "white", fontSize: 15 }}>List of scheduled and confirmed Visit</Text>}
        </TouchableOpacity>
      </View>

      <View style={styles.filterHolder}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PatientList");
          }}
        >
          
          <Icon3 name="people" color="white" size={20}></Icon3>
          <Text style={{color: "white", fontSize: 25 }}>Patients</Text>
          {<Text style={{ color: "white", fontSize: 15 }}>List of served patients</Text>}
        </TouchableOpacity>
      </View>

      {/*  */}
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
  agency: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  filterHolder: {
    display:"flex",
    flexDirection:"row",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
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
});

export default Patient;
