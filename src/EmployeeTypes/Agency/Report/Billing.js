import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Footer from "../Footer";


const Billing = ({ navigation }) =>{
    return (
        <View style={{ width: '100%', height: '100%' }}>

            {/* Header */}
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

            {/*  */}
            <View style={styles.selectorScrollView}>
            <ScrollView>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Billing Report')
                }}
              >
                <Text style={{ color: 'white' }}>Billing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollViewButtons}
                onPress={() => {
                  navigation.navigate('Bank Detail Report')
                }}
              >
                <Text style={{ color: 'white' }}>Bank Detail Report</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>



            <Footer />
            {/*  */}
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
        width: '75%',
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
    filterHolder: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 5,
        alignItems: "center",
        paddingVertical: 20,
        width: '70%',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#1B365C',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    tableHolder: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        alignSelf: 'center',
        paddingVertical: 20,
        width: '90%',
        height: 300,
        borderRadius: 20,
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
        width: '100%',
        height: '100%',
        marginTop: '10%',
    },
    selectorScrollView: {
        position: 'relative',
        width: '90%',
        height: '65%',
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

export default Billing;