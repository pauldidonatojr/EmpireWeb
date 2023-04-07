import React, { useState } from "react";
import {Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Footer from "../Footer";
import {Checkbox} from 'react-native-paper';
import { SelectList } from "react-native-dropdown-select-list";

import Icon2 from "react-native-vector-icons/Fontisto";

import Icon from "react-native-vector-icons/Entypo";

import { Overlay, ListItem, Avatar } from "react-native-elements";

const ProviderProfile = () => {
    const [checked, setChecked] = React.useState(false);
    const [selected, setSelected] = React.useState("");
    
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

            {/*  */}
            <View style={styles.icon2}>
            <Icon2
            name="email"
            size={30}
            onPress={toggleOverlay}
          >
          </Icon2>
          <Text style ={{fontSize:15}}>Automated</Text>
          <Text style ={{fontSize:15}}>Emails</Text>
          
          </View>

          {/*Email display Overlay  */}
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
            style={styles.crossIcon}
            name="cross"
            size={30}
            onPress={CrossClicked}
          ></Icon>
          <View style = {styles.titleholder}>
                            <Text style={{ fontWeight: 'bold',marginLeft:75, color: '#1B365C' }}>Automated Emails</Text>
                            </View>
      <ScrollView>
        {list.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.CommomNotification}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Recipients:</Text> {l.Reciepiets}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Status:</Text> {l.Status}
                </ListItem.Subtitle>

              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>

          <ScrollView>
            <Button title="Add" onPress={AddClicked} />
          </ScrollView>
        </Overlay>
       


{/*Email display Overlay  */}
          


            <View style={styles.selectorScrollView}>
                <ScrollView>


                    {/*  */}

                    <View style={styles.tableHolder}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <View style = {styles.titleholder}>
                            <Text style={{ fontWeight: 'bold',marginLeft:10, color: '#1B365C' }}>General</Text>
                            <TouchableOpacity style={{marginLeft:"60%", color: '#1B365C' }}><Text>History</Text></TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', height: '100%' }} >
                            <TextInput style= {styles.input}
        placeholder='Vendor Name'
    />
    <TextInput style= {styles.input}
        placeholder='Vender Intials'
    /><TextInput style= {styles.input}
    placeholder='Password Expires Within (Days)'
/><TextInput style= {styles.input}
        placeholder='Serviced Zip Code'
    />
    <View style = {styles.checkbox}>
        
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <View style = {styles.checkboxText}>
    <Text style ={{fontSize:12.5,color : 'grey'}}>Automatic Visit Creation </Text>
    <Text style ={{fontSize:12.5,color : 'grey'}}>Based on EVV Confimation</Text>
    </View>
    </View>
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="Select Language"
                save="value"
              />
            </View>
            <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Mobile GPS Visit </Text>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Verfication</Text>
        </View>
        </View>
        
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="Cordinator"
                save="value"
              />
            </View>
            <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Mobile GPS Visit </Text>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Verfication</Text>
        </View>
        </View>
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>Allow Single Clock in/out</Text>
        <Text style ={{fontSize:12.5,color : 'grey'}}>for Consective Shift (Mobile App)</Text>
        </View>
        </View>
    <TextInput style= {styles.input}
    placeholder='Mobile Offline Sync Period'
/>                      
</View>
                        </View>
                    </View>

                    {/*  */}

                    <View style={styles.tableHolder2}>
                        <View style={{ width: '100%', height: '100%'}}>
                        <View style = {styles.titleholder}>
                            <Text style={{ fontWeight: 'bold',marginLeft:10, color: '#1B365C' }}>Call Exception Notifications Setup</Text>
                            <TouchableOpacity style={{marginLeft:"10%", color: '#1B365C' }}><Text>History</Text></TouchableOpacity>
                            </View>
                            <TextInput style= {styles.input}
    placeholder='Alert Email'
/>
<View style={styles.CHolder}>
          
        <View style = {styles.checkbox}>
        
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <View style = {styles.checkboxText}>
        <Text style ={{fontSize:12.5,color : 'grey'}}>WeekDay</Text>
        <TextInput 
    placeholder='From'
/>
<TextInput 
    placeholder='To'
/>
<TextInput 
    placeholder='Frequency (min)'
/>
        </View>
        </View>
  </View>
  
<View style={styles.CHolder}>
          
          <View style = {styles.checkbox}>
          
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style = {styles.checkboxText}>
          <Text style ={{fontSize:12.5,color : 'grey'}}>Saturday</Text>
          <TextInput 
      placeholder='From'
  />
  <TextInput 
      placeholder='To'
  />
  <TextInput 
      placeholder='Frequency (min)'
  />
          </View>
          </View>
    </View>
    <View style={styles.CHolder}>
          
          <View style = {styles.checkbox}>
          
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style = {styles.checkboxText}>
          <Text style ={{fontSize:12.5,color : 'grey'}}>Sunday</Text>
          <TextInput 
      placeholder='From'
  />
  <TextInput 
      placeholder='To'
  />
  <TextInput 
      placeholder='Frequency (min)'
  />
          </View>
          </View>
    </View>                    
                 </View>
                    </View>

                    {/*  */}

                    <View style={styles.tableHolder3}>
                        <View style={{ width: '100%', height: '100%' }}>
                        <View style = {styles.titleholder}>
                            <Text style={{ fontWeight: 'bold',marginLeft:10, color: '#1B365C' }}>Address</Text>
                            <TouchableOpacity style={{marginLeft:"65%", color: '#1B365C' }}><Text>History</Text></TouchableOpacity>
                            </View>
<TextInput style= {styles.input}
    placeholder='Street 1'
/><TextInput style= {styles.input}
    placeholder='Street 2'
/><TextInput style= {styles.input}
    placeholder='City'
/>

<View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={MCODropdown}
                placeholder="State"
                save="value"
              />
            </View>
<TextInput style= {styles.input}
    placeholder='Zip'
/><TextInput style= {styles.input}
    placeholder='Home Phone'
/>                       
<TextInput style= {styles.input}
    placeholder='Phone 2'
/><TextInput style= {styles.input}
    placeholder='Phone 3'
/>
<View style = {styles.checkbox}>
          
          <View style = {styles.checkboxText}>
          <TextInput 
      placeholder='Day Phone'
  />
  <TextInput 
      placeholder='From'
  />
  <TextInput 
      placeholder='To'
  />
          </View>
          </View>
          <TextInput style= {styles.input}
    placeholder='Evening Phone'
/>
<TextInput style= {styles.input}
    placeholder='Weekend Phone'
/>
<TextInput style= {styles.input}
    placeholder='Audit Call In %'
/>
<TextInput style= {styles.savebtn}
    placeholder='Audit Call Out %'
/>
<Button
        title="Save"
      />
                        </View>
                    </View>

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
    savebtn:{
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        
        marginTop: "12.5%",
        marginLeft: "12.5%",
        width: 250,
        borderRadius: 10, 
        marginBottom: "3.5%",
        
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
},
CHolder:{

    flexDirection:'column',
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
        height: 1200,
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

export default ProviderProfile;