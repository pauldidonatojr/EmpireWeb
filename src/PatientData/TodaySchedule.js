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

import { Overlay, ListItem, Avatar } from "react-native-elements";
// Import vector icons

import Icon from "react-native-vector-icons/AntDesign";

{
  /*This List is Temporarily used to showcase UI */
}
{
  /*Later in Backend dev stage List will be fetched from Datebase*/
}

const list = [
  {
    name: "Wanda De Martinez",
    address: "262A Upper tooting road, SWDN17",
    ExpectedClockin: "07:30 AM",
    ExpectedClockOut: "11 : 30 AM",
  },
];

var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const PopulateState = ({ navigation }) => {
  return (
    <ScrollView >
      {list.map((l, i) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VisitDetails");
          }}
        >
          <ListItem  key={i} bottomDivider style={styles.ListItem}>
            <ListItem.Content style={{backgroundColor:"#3F7C85",padding:10,borderRadius:5}}>
              <View>
                <Icon
                  style={styles.icon}
                  name="arrowright"
                  size={25}
                  color={"white"}
                ></Icon>
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

const TodaySchedule = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/*  */}
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

      <PopulateState navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  ListItem: {
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  greetings: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon:{
    marginLeft:"93%",
    position:"absolute"
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
});
export default TodaySchedule;
