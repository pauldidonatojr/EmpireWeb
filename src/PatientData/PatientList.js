import React, { useState } from "react";
import { Switch, Alert, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
import Footer from "../Footer";
import { Button, Overlay, ListItem, Avatar } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from 'react-native-vector-icons/FontAwesome5';

var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

const list = [
    {
        name: 'Wanda De Martinez',
        address: '262A Upper tooting road, SWDN17',
       
    },
    {
      name: 'Hector Salamanca',
      address: 'Ohio Street 25A, OH01DS',
  },
  {
    name: 'Walter White',
    address: '3828 Piermont Dr, Albuquerque, NM.',
},

  ]


const PatientList =({navigation})=> {


    const [index, setIndex] = useState(1);
    const [visible, setVisible] = useState(false);

    const IntialView = () => {
        return (
            <View><Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 18, padding: 16 }}>Please Select From Filter to Display Items</Text></View>
        )
    }
    const ShowListState =({navigation})=> {
        return (
            <ScrollView>
            {list.map((l, i) => (
      <TouchableOpacity  onPress={() => {
        navigation.navigate('PatientDetail')
    }}>
        
        <ListItem key={i} bottomDivider style={styles.ListItem}>
            
          <ListItem.Content style={{backgroundColor:"#3F7C85",padding:10,borderRadius:5}}>
          <View>
                <Icon2
                  style={styles.icon2}
                  name="arrowright"
                  size={25}
                  color={"#012030"}
                ></Icon2>
              </View>
            <ListItem.Title style={{color:"white",fontSize:25}}>{l.name}</ListItem.Title>
            <ListItem.Subtitle>
              {" "}
              <Text style={{color:"white"}}>Address: {l.address} </Text>
            </ListItem.Subtitle>

          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    ))}
    </ScrollView>
        )
    }
    const SearchClicked = () => {
        setIndex(2);
        setVisible(!visible);
    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const CrossClicked = () =>{
        setVisible(!visible);
    
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


            <View
            >
                


                <ShowListState navigation={navigation}/>

                <Icon3
                  style={styles.magnifyIcon}
                  name="search"
                  size={40}
                  color={"white"}
                  onPress={toggleOverlay} 
                ></Icon3>


                
                <Overlay overlayStyle={{
                    borderRadius: 15, width: '90%', height: '50%', padding: '10%',
                    backgroundColor:"#E6DFD9"
                }} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Icon
    style={styles.icon}
              name="cross"
              size={25}
              onPress={CrossClicked}>
              </Icon>
                    <ScrollView>
                    
                        <TextInput style={styles.input}
                            placeholder='Name'
                        />
                        <TextInput style={styles.input}
                            placeholder='Address'
                        />                      
                        <Button
                            title="Search"
                            onPress={SearchClicked}
                        />
                    </ScrollView>
                </Overlay>
            </View>
            
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
    icon2:{
        color:"white",
        marginLeft:"93%",
        position:"absolute"
      },
    overlay: {
        width: '100%',
        height: '100%',
    },
    dropdown :{
        borderWidth: 0,
        borderColor: '#777',
        padding: 8,
        width: 265,
        borderRadius: 10,
        marginBottom: '10%'
    },
    icon :{
        marginLeft : "90%",
        color : 'black',
        marginTop : 0,
        marginBottom : 15,
    },
    input: {
        
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        marginLeft: '2.5%',
        width: "90%",
        borderRadius: 10,
        marginBottom: '10%'

    },
    fieldholder: {

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
        height: '65%',
        marginTop: '10%',
    },
    magnifyIcon:{
        position:"absolute",
        borderRadius:200,
        zIndex:999,
        color:"black",
        height:40,
        width:"15%",
        marginLeft:"70%",
        marginTop:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#161F30",
        color:"white",
        padding:25
            },
});

export default PatientList;