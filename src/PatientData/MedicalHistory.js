import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Modal from "react-native-modal";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Man from '../../assets/man.png'

const MedicalHistory = () => {
  return (
    <View>
      <View style={styles.page}>
        <View style={styles.topPart}>
          <Text style={styles.employeeNameHeader}>Patient Name</Text>
          {/* Card on header */}
          <View style={styles.userLogoCard}>
          <Image
          style={{
            width: '100%', height: '100%', borderRadius: 20
          }}
          source={Man}
        />
          </View>
          <View style={styles.userHeaderButtons}>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Medical History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Create Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomPart}>

        <View style={styles.upcommingAppointment}>
          <View style={{width: '30%', height: '100%'}}>
          <Text style={{fontWeight: 'bold',flex:1,justifyContent: "center",alignItems: "center", textAlignVertical: "center",textAlign: "center",}}>Upcomming Appointment</Text>
          </View>
          <View style={{width: '40%', height: '100%'}}>
          <Text style={{flex:1,justifyContent: "center",alignItems: "center", textAlignVertical: "center",textAlign: "center",}}>With Doctor Jack for Dental Checkup</Text>
          </View>

          <View style={{width: '30%', height: '100%'}}>
          <Text style={{flex:1,justifyContent: "center",alignItems: "center", textAlignVertical: "center",textAlign: "center",}}>02/1/2023</Text>
          </View>
            
        </View>


        <View style={styles.ongoingTreatment}>
          <View style={{width: '100%', height: '30%'}}>
          <Text style={{fontWeight: 'bold',flex:1,justifyContent: "center",alignItems: "center", textAlignVertical: "center",textAlign: "center",color: 'white'}}>Ongoing Treatment</Text>
          </View>
          
        </View>

          <View style={styles.selectorScrollView}>
            <ScrollView>
              <TouchableOpacity
                style={styles.scrollViewButtons}
              >
                <Text style={{ color: 'white' }}>Care Plan</Text>
              </TouchableOpacity>
              
            </ScrollView>
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
    position: 'relative'
  },
  employeeNameHeader:{
    width: '100%',
    height: '15%',
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: "center",
    textAlignVertical: 'center'
  },
  userLogoCard: {
    position: 'relative',
    width: '40%',
    height: '40%',
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
  userHeaderButtons: {
    width: '100%',
    height: '30%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomPart: {
    width: '100%',
    height: '100%'
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: '45%',
    borderRadius: 30,
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
  upcommingAppointment: {
    position: 'relative',
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    backgroundColor: 'white',
  },
  ongoingTreatment:{
    position: 'relative',
    width: '90%',
    height: '20%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    flexDirection: 'column',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    backgroundColor: '#07D9B2',
  },
  selectorScrollView: {
    position: 'relative',
    width: '90%',
    height: '30%',
    marginTop: '10%',
    alignSelf: 'center',
  },
  scrollViewButtons: {
    alignItems: "center",
    paddingVertical: 20,
    width: '100%',
    borderRadius: 20,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#07D9B2',
  },
});

export default MedicalHistory;