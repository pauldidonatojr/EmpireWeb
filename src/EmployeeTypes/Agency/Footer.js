import React, { useState } from "react";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Agency from "./Agency";

const Footer = ({ navigation }) => {
  return (
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={styles.holder}>
            <View style={styles.buttonHolder}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Link Communications')
                  }}
              >
                <Text 
                style={{ color: 'black' }}
                >Home</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonHolder}>
            <TouchableOpacity
                style={styles.button}
              >
                <Text style={{ color: 'black' }}>Log Out</Text>
              </TouchableOpacity>
            </View>
        </View>
        
    </View>
  )
};

const styles = StyleSheet.create({
  holder: {
    width: '100%',
    height: 80,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  buttonHolder: {
    height: '100%',
    width: '50%',
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
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    }
  },
});

export default Footer;