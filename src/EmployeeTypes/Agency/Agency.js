import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";


const Agency = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>

      <View style={{ width: '100%', height: '10%' }}>
        {/* Greetings */}
        <View style={styles.greetings}>
          <Text style={{ fontSize: 25, color: '#1B365C' }}>Hi,</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1B365C' }}>{' '}Hector</Text>
        </View>
        {/* Agency Name */}
        <View style={styles.agency}>
          <Text style={{ fontSize: 20, color: '#1B365C' }}>Empire Home Care Agency LLC.</Text>
        </View>
      </View>

      {/* Notifications Part */}
      <View style={styles.actionsHolder}>
        <View style={{ width: '50%', height: '100%', alignItems: 'flex-start' }}>
          <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications</Text>
          </View>
        </View>
        <View style={{ width: '50%', height: '100%', alignItems: 'flex-end' }}>
          <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Menu</Text>
          </View>
        </View>
      </View>

      {/* Selector */}
      <View style={styles.userHeaderButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Link Communications')
          }}
        >
          <Text style={{ color: 'white' }}>Link Communications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('System Notifications')
          }}
        >
          <Text style={{ color: 'white' }}>System Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectorScrollView}>
            <ScrollView>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Members')
                }}
              >
                <Text style={{ color: 'white' }}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Care Giver Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Care Givers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Visit Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Visit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Action Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Actions</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Billing Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Billings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Report Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Report</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Admin Selector')
                }}
              >
                <Text style={{ color: 'white' }}>Admin</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        <Footer/>
    </View>
  )
};

const styles = StyleSheet.create({
  greetings: {
    width: '100%',
    height: '50%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  agency: {
    width: '100%',
    height: '50%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionsHolder: {
    width: '100%',
    height: '10%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userHeaderButtons: {
    width: '100%',
    height: '10%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: '45%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#1B365C',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    }
  },
  tableFilter: {
    width: '100%',
    height: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  filterButton: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: '98%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#1B365C',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    }
  },
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
  employeeNameHeader: {
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
  jobAssignCard: {
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
  selectorScrollView: {
    position: 'relative',
    width: '90%',
    height: '30%',
    marginTop: '10%',
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
  scrollViewButtons: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 20,
    width: '100%',
    borderRadius: 20,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#07D9B2',
  },
  userHeaderButtons: {
    width: '100%',
    height: '10%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: '45%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#1B365C',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    }
  },
  tableFilter: {
    width: '100%',
    height: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  filterButton: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: '98%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#1B365C',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    }
  },
  selectorScrollView: {
    position: 'relative',
    width: '90%',
    height: '50%',
    marginTop: '10%',
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
  scrollViewButtons: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 20,
    width: '100%',
    
    borderRadius: 20,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#1B365C',
  },
});

export default Agency;