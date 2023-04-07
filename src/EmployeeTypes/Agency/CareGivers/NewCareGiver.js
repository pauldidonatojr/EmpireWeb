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

const NewCareGiver = () => {
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

      {/*  */}

      <View style={styles.selectorScrollView}>
        <ScrollView>
          {/*  */}

          <View style={styles.tableHolder}>
            <View style={{ width: "100%", height: "100%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#1B365C",
                }}
              >
                Demographics
              </Text>
              <View style={{ width: "100%", height: "100%" }}>
                <TextInput style={styles.input} placeholder="First Name" />
                <TextInput style={styles.input} placeholder="Middle Name" />
                <TextInput style={styles.input} placeholder="Last Name" />
                <TextInput style={styles.input} placeholder="Intials" />
                <TextInput style={styles.input} placeholder="Gender" />
                <TextInput style={styles.input} placeholder="DOB" />
                <TextInput style={styles.input} placeholder="Status" />
                <TextInput
                  style={styles.input}
                  placeholder="Alt. Caregiver Code"
                />
                <TextInput style={styles.input} placeholder="SSN#" />
                <TextInput
                  style={styles.input}
                  placeholder="Caregiver Mobile ID"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Device ID"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Primary Member Team"
                />
                <TextInput style={styles.input} placeholder="NPI Number" />
                <TextInput
                  style={styles.input}
                  placeholder="Rehire ? Yes or No"
                />
                <TextInput style={styles.input} placeholder="Rehire Date" />
                <TextInput style={styles.input} placeholder="Employmnet Type" />
              </View>
            </View>
          </View>

          {/*  */}

          <View style={styles.tableHolder2}>
            <View style={{ width: "100%", height: "100%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#1B365C",
                }}
              >
                Address
              </Text>
              <TextInput style={styles.input} placeholder="Street 1" />
              <TextInput style={styles.input} placeholder="Street 2" />
              <TextInput style={styles.input} placeholder="City" />
              <TextInput style={styles.input} placeholder="Zip" />
              <TextInput style={styles.input} placeholder="Phone 2" />
              <TextInput style={styles.input} placeholder="State" />
              <TextInput style={styles.input} placeholder="Home Phone" />
              <TextInput style={styles.input} placeholder="Phone" />
            </View>
          </View>

          {/*  */}

          <View style={styles.tableHolder3}>
            <View style={{ width: "100%", height: "100%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  textAlign: "center",
                  color: "#1B365C",
                }}
              >
                Emergency Contact 1
              </Text>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="RelationShip" />
              <TextInput style={styles.input} placeholder="Address" />
              <TextInput style={styles.input} placeholder="Phone 1" />
              <TextInput style={styles.input} placeholder="Phone 2" />
              <Text
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  textAlign: "center",
                  color: "#1B365C",
                }}
              >
                Emergency Contact 2
              </Text>

              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="RelationShip" />
              <TextInput style={styles.input} placeholder="Address" />
              <TextInput style={styles.input} placeholder="Phone 1" />
              <TextInput style={styles.input} placeholder="Phone 2" />
              <View style={styles.savebtn}>
                <Button title="-- Sign Up -- " />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/*  */}
      <Footer />
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginLeft: "2.5%",
    width: 250,
    borderRadius: 10,
    marginLeft: "12.5%",
    marginBottom: "10%",
  },
  savebtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "45%",
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
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "50%",
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
  ongoingTreatment: {
    position: "relative",
    width: "90%",
    height: 300,
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    flexDirection: "column",
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "#1B365C",
  },
  tableHolder: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    width: "90%",
    height: 1350,
    borderRadius: 20,
    backgroundColor: "white",
  },
  tableHolder2: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    width: "90%",
    height: 700,
    borderRadius: 20,
    backgroundColor: "white",
  },
  tableHolder3: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    width: "90%",
    height: 900,
    borderRadius: 20,
    backgroundColor: "white",
  },
  selectorScrollView: {
    position: "relative",
    width: "100%",
    height: "65%",
    marginTop: "10%",
  },
});

export default NewCareGiver;
