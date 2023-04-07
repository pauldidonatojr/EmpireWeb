import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agency from "./Agency";
import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";


const Tab = createBottomTabNavigator();
const BottomNavigationAgency = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Agency} />
    </Tab.Navigator>
  );
}


export default BottomNavigationAgency;

