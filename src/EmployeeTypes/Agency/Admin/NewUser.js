import React, { useState } from "react";
import {Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Footer from "../Footer";
import {Checkbox} from 'react-native-paper';
import { SelectList } from "react-native-dropdown-select-list";
import Icon2 from "react-native-vector-icons/Fontisto";

import Icon from "react-native-vector-icons/Entypo";

import { Overlay, ListItem, Avatar } from "react-native-elements";

const NewUser = () => {
    const [checked1, setChecked1] = React.useState(false);
    
    const [checked2, setChecked2] = React.useState(false);
    
    const [checked3, setChecked3] = React.useState(false);
    
    const [checked4, setChecked4] = React.useState(false);
    
    const [checked5, setChecked5] = React.useState(false);
    
    const [checked6, setChecked6] = React.useState(false);
    
    const [checked7, setChecked7] = React.useState(false);
    
    const [checked8, setChecked8] = React.useState(false);

    const [selected9, setSelected] = React.useState("");
    
  const [visible, setVisible] = useState(false);
  
  const CrossClicked = () => {
    setVisible(!visible);
  };

    const MCODropdown = [
        { key: "1", value: "AmeriHealth Caritas of PA" },
        { key: "2", value: "Centene PA Health Wellness" },
        { key: "3", value: "KEYSTONE FIRST CHC" },
        { key: "4", value: "UPMC Health Plan" },
      ];
      const list = [
        {
          CommomNotification: "CareGiver Mobile Opts-Out Notification",
          Reciepiets: "EmpireHomeCare@gmail.com",
          Status: "Active",
          
        },
        {
            CommomNotification: "CareGiver Mobile Opts-Out Notification",
            Reciepiets: "EmpireHomeCare@gmail.com",
            Status: "Active",
            
          },
          {
            CommomNotification: "CareGiver Mobile Opts-Out Notification",
            Reciepiets: "EmpireHomeCare@gmail.com",
            Status: "Active",
            
          },
          {
            CommomNotification: "CareGiver Mobile Opts-Out Notification",
            Reciepiets: "EmpireHomeCare@gmail.com",
            Status: "Active",
            
          },
        {
            CommomNotification: "CareGiver Mobile Opts-Out Notification",
          Reciepiets: "EmpireHomeCare@gmail.com",
          Status: "Active",
        },
        ,
        {
            CommomNotification: "CareGiver Mobile Opts-Out Notification",
          Reciepiets: "EmpireHomeCare@gmail.com",
          Status: "Active",
        },
      ];
      const AddClicked = () => {
        {/* INVOKE EMAIL DISPLAY OVERLAY */}
      };
      const toggleOverlay = () => {
        setVisible(!visible);
      };
  const SaveClicked = () => {
    
  };
     return (
        <View style={{ width: '100%', height: '100%' }}>


            {/*  */}
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

          {/*Email display Overlay  */}
          



            <View style={styles.selectorScrollView}>
                <ScrollView>


                    {/*  */}

                    <View style={styles.tableHolder}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <View style = {styles.titleholder}>
                            <Text style={{ fontWeight: 'bold',marginLeft:10, color: '#1B365C' }}>Add New User</Text>
                            </View>
                            <View style={{ width: '100%', height: '100%' }} >
                            <TextInput style= {styles.input}
        placeholder='First Name'
    />
    <TextInput style= {styles.input}
        placeholder='Last Name'
    /><TextInput style= {styles.input}
    placeholder='Login Name'
/><TextInput style= {styles.input}
        placeholder='Email'
    />
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="Role"
                save="value"
              />
            </View>
            
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="Default Home Module Tab"
                save="value"
              />
            </View>
            
        
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="Status"
                save="value"
              />
            </View>

            <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>IP Restricted </Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>

        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked2(!checked2);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Monday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked3 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked3(!checked3);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Tuesday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked4 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked4(!checked4);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Wednesday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked4 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked4(!checked4);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Thursday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked5 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked5(!checked5);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Friday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked6 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked6(!checked6);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Saturday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked7 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked7(!checked7);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Sunday - Hourly Restricted</Text>
        <TextInput 
    placeholder='IP1'
/>
<TextInput 
    placeholder='IP2'
/>
<TextInput 
    placeholder='IP3'
/>
        </View>
        </View>
        
<View style = {styles.Button}>
<Button 
  title="Save"
/>
</View>
<View style = {styles.Button}>
<Button 
  title="Cancel"
/>
</View>


        </View>
        
        
                        </View>
                    </View>

                    {/*  */}

                                    </ScrollView>
  

            </View>

            {/*  */}
            <Footer />
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
    but:{
        width : 100,
        color : 'black',
    },
    input : {
        
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    
    marginTop: "12.5%",
    marginLeft: "12.5%",
    width: 250,
    borderRadius: 10, 
},//////
CHolder:{

    flexDirection:'column',
},
Button:{
    margin : 10,
},
    agency: {
        width: '100%',
        height: '50%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dropdown: {
    borderColor: "#777",
    padding: 8,
    
    marginTop: "12.5%",
    marginLeft: "12.5%",
    width: 250,
    borderRadius: 10,
    },
    icon2: {
        marginLeft: 250,
        color: "blue",
        flexDirection:'column',  
        justifyContent: 'center',
        alignItems: 'center',
      },
    checkbox :{
        flexDirection : 'row',
        
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    
    marginTop: "12.5%",
    marginLeft: "12.5%",
    width: 250,
    borderRadius: 10,
        
    },
    checkboxText:{
        fontSize:1,
        flexDirection : 'column',
    },
    titleholder:{
        flexDirection : 'row',
        
        justifyContent: 'center',
        alignItems: 'center',
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
    filterHolder: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    crossIcon:{

        marginLeft: 230,
        color: "black",
        marginTop: 0,
        marginBottom: 15,
    },
    ListItem: {
        backgroundColor: "#B3CCFD",
        padding: 10,
      },
    button: {
        margin: 5,
        alignItems: "center",
        paddingVertical: 20,
        width: '50%',
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
    ongoingTreatment: {
        position: 'relative',
        width: '90%',
        height: 300,
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
    
    tableHolder: {
        marginBottom: 10,
        alignItems: "center",
        alignSelf: 'center',
        paddingVertical: 20,
        width: '90%',
        height: 2100,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    tableHolder2:{
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        alignSelf: 'center',
        paddingVertical: 20,
        width: '90%',
        height: 700,
        borderRadius: 20,
        backgroundColor: 'white',},
    tableHolder3:{
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        alignSelf: 'center',
        paddingVertical: 20,
        width: '90%',
        height: 1400,
        borderRadius: 20,
        backgroundColor: 'white',},
    selectorScrollView: {
        position: 'relative',
        width: '100%',
        height: '65%',
        marginTop: '10%',
    },
});

export default NewUser;