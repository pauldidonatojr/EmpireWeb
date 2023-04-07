import React, { useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  KeyboardAwareScrollView,
} from "react-native";
import Footer from "../Footer";
import { Button, Overlay, ListItem, Avatar } from "react-native-elements";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/Entypo";

const ExceptionSummeryByProvider = () => {
  const [selected, setSelected] = React.useState("");

  const MCODropdown = [
    { key: "1", value: "AmeriHealth Caritas of PA" },
    { key: "2", value: "Centene PA Health Wellness" },
    { key: "3", value: "KEYSTONE FIRST CHC" },
    { key: "4", value: "UPMC Health Plan" },
  ];

  const TeamDropdown = [
    { key: "1", value: "Active" },
    { key: "2", value: "In Active" },
  ];
  const CordinatorDropdown = [
    { key: "1", value: "Active" },
    { key: "2", value: "In Active" },
  ];
  const TypeOfServiceDropdown = [
    { key: "1", value: "Active" },
    { key: "2", value: "In Active" },
  ];

  const [index, setIndex] = useState(1);
  const [visible, setVisible] = useState(false);

  const CrossClicked = () => {
    setVisible(!visible);
  };
  const IntialView = () => {
    return (
      <View>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            padding: 16,
          }}
        >
          Please Select From Filter to Display Items
        </Text>
      </View>
    );
  };
  const ShowListState = () => {
    return (
      <ScrollView>
        {list.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const SearchClicked = () => {
    setIndex(2);
    setVisible(!visible);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const list = [
    {
      name: "Amy Farha",
      Code: "78975",
      AltCaregiverCode: "CD5452",
      SSN: "DA1324S56",
      ProviderId: "4578SD55",
      DOB: "10 Jul 1995",
      Phone: "02031953204",
      Status: "Active",
      Discipline: "Dental",
    },
    {
      name: "Chris Jackson",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
    ,
    {
      name: "Chris Jackson",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
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

      <View>
        <Button title="Select Filters from here" onPress={toggleOverlay} />
        <ScrollView>{index == 1 ? IntialView() : ShowListState()}</ScrollView>

        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible}
          onBackdropPress={toggleOverlay}
        >
          <Icon
            style={styles.icon}
            name="cross"
            size={25}
            onPress={CrossClicked}
          ></Icon>
          <ScrollView>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="MCO (s)"
                save="value"
              />
            </View>
            <TextInput style={styles.input} placeholder="From Date DD/MM/YY" />
            <TextInput style={styles.input} placeholder="To Date DD/MM/YY" />

            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={TypeOfServiceDropdown}
                placeholder="Type Of Service"
                save="value"
              />
            </View>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={CordinatorDropdown}
                placeholder="Cordinator"
                save="value"
              />
            </View>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={TeamDropdown}
                placeholder="Team (s)"
                save="value"
              />
            </View>
            <Button title="Search" onPress={SearchClicked} />
          </ScrollView>
        </Overlay>
      </View>

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
  },
  icon: {
    marginLeft: 250,
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
  ListItem: {
    backgroundColor: "#B3CCFD",
    padding: 10,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginLeft: "2.5%",
    width: 250,
    borderRadius: 10,
    marginBottom: "10%",
  },
  fieldholder: {},

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
    height: "65%",
    marginTop: "10%",
  },
});

export default ExceptionSummeryByProvider;
