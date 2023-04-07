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
import { SelectList } from "react-native-dropdown-select-list";

const NewCordinator = () => {

    const [selected, setSelected] = React.useState("");

  const StatusDropdown = [
    { key: "1", value: "Active" },
    { key: "2", value: "In Active" },
  ];
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
                Add New Cordinator
              </Text>
              <View style={{ width: "100%", height: "100%" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Cordinator Number"
                />
                <TextInput style={styles.input} placeholder="Cordinator Name" />
                
                <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={StatusDropdown}
                placeholder="Status"
                save="value"
              />
            </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <Button title="Done" />
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
  dropdown: {
    borderWidth: 0,
    borderColor: "#777",
    padding: 8,
    width: 265,
    borderRadius: 10,
    marginBottom: "10%",
    marginLeft : 40,  
},
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginLeft: "15%",
    marginTop: "4.5%",
    width: 250,
    borderRadius: 10,
    marginBottom: "10%",
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
    height: 500,
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

export default NewCordinator;
