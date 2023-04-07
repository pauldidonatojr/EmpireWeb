import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Modal from "react-native-modal";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Man from '../../assets/man.png'

const CarePlan = () => {
    return (
        <View>
            <View style={styles.page}>
                <View style={styles.ongoingTreatment}>
                    <View style={{ width: '50%', height: '100%' }}>
                        <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'black' }}>Ongoing Treatment</Text>
                    </View>

                    <View style={{ width: '50%', height: '100%' }}>
                        <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'black' }}>Lungs Cancer</Text>
                    </View>

                </View>

                <View style={styles.assignedDoctor}>

                    <View style={{ flexDirection: 'row', height: '50%', width: '100%' }}>
                        <View style={{ width: '50%', height: '100%' }}>
                            <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'black' }}>Assigned Doctor</Text>
                        </View>

                        <View style={{ width: '50%', height: '100%' }}>
                            <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'black' }}>Dr. Jason Brown</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: '50%', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: 'white' }}>Create A Query</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.progressReport}>

                    <View style={{ flexDirection: 'row', height: '30%', width: '100%' }}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Text style={{ fontWeight: 'bold', flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'white' }}>Progress Report from Doctor</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: '70%', alignItems: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                        <Text style={{ flex: 1, justifyContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center", color: 'black' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </Text>
                    </View>
                </View>

                <View style={styles.selectorScrollView}>
                    <ScrollView>
                        <TouchableOpacity
                            style={styles.scrollViewButtons}
                        >
                            <Text style={{ color: 'white' }}>Care Plan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.scrollViewButtons}
                        >
                            <Text style={{ color: 'white' }}>Suggested Diet Plan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.scrollViewButtons}
                        >
                            <Text style={{ color: 'white' }}>Physical and Emotional Health</Text>
                        </TouchableOpacity>

                    </ScrollView>
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
    },
    ongoingTreatment: {
        position: 'relative',
        width: '90%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: "#000",
        flexDirection: 'row',
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        backgroundColor: 'white',
    },

    assignedDoctor: {
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
        backgroundColor: 'white',
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
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    progressReport: {
        position: 'relative',
        width: '90%',
        height: '30%',
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
        backgroundColor: '#1B365C',
    },
    buttonHolderMain: {
        position: 'relative',
        width: '90%',
        height: '30%',
        marginTop: '10%',
        alignSelf: 'center',
    },
    guradianButton: {
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 20,
        width: '98%',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#1B365C',
    },

    selectorScrollView: {
        position: 'relative',
        width: '90%',
        height: '30%',
        marginTop: '5%',
        alignSelf: 'center',
      },
      scrollViewButtons: {
        alignItems: "center",
        paddingVertical: 20,
        width: '100%',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#1B365C',
        marginTop: 5,
      },
});

export default CarePlan;