import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Modal from "react-native-modal";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const Admin = () => {
  return (
    <View>
      <View style={styles.page}>
        <View style={styles.topPart}>
          {/* Card on header */}
          <View style={styles.userLogoCard}>
            {/* View Available Jobs */}
            <View style={styles.dataHeaderCard}>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>Available Jobs</Text>
              </View>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>0</Text>
              </View>
            </View>
            {/* View Signed Off Employees */}
            <View style={styles.dataHeaderCard}>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>Clocked Out Employees</Text>
              </View>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>0</Text>
              </View>
            </View>
            {/* View Discharged Patients Today */}
            <View style={styles.dataHeaderCard}>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>Patients Discharged Today</Text>
              </View>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>0</Text>
              </View>
            </View>
            {/* View Total Number of Patients */}
            <View style={styles.dataHeaderCard}>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>Patients Admitted</Text>
              </View>
              <View style={{ width: '50%', height: '100%' }}>
                <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", }}>0</Text>
              </View>
            </View>
          </View>


          <View style={styles.adminActionButtonsHolder}>
          <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Print Time Sheets</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Patients</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Notifications</Text>
            </TouchableOpacity>
          </View>

          

        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    positoin: 'relative',
    backgroundColor: '#B6F5E3'
  },
  topPart: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    position: 'relative',
  },
  userLogoCard: {
    position: 'relative',
    width: '90%',
    height: '50%',
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    backgroundColor: 'white'
  },
  dataHeaderCard: {
    width: '100%',
    height: '20%',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  userHeaderButtons: {
    width: '100%',
    height: '30%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomPart: {

  },
  button: {
    margin: 5,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 20,
    width: '99%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#107369',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  adminActionButtonsHolder:{
    position: 'relative',
    width: '90%',
    height: '100%',
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 20,
  }
});

export default Admin;