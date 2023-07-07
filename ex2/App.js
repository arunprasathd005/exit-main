import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  } from 'react-native';
export default function App() {
        const onPressok = () => {
                // Do something about ok operation
                };
         const onPresssendOTP = () => {
               // Do something about sendOTP operation
               };
                const [state,setState] = useState({
                email: '',
                otp: '',
                })
    return(
    
      <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.top}></View>
       <View style={styles.top2}>
      </View>
     
      <Text style={styles.title}>Enter Your Mail</Text>
      <View style={styles.inputView}>
      <TextInput
           style={styles.inputText}
           placeholder="e.g John@gmail.com"
          
           onChangeText={text => setState({email:text})}/>
           
      </View>
      <TouchableOpacity
onPress = {onPresssendOTP} style={styles.Button}>

 <Text style={styles.Buttontext}>Send OTP</Text>

</TouchableOpacity>
      
      <Text style={{
        marginTop: 30,
        fontWeight: "italic",
      fontSize:40,
      color:"black",     }}>Enter Your OTP</Text>
      <View style={styles.inputView1}>
      <TextInput
           style={styles.inputText}
           placeholder="                       _        _        _         _                    "
           
           onChangeText={text => setState({otp:text})}/>
           
      </View>
      <TouchableOpacity
onPress = {onPressok} style={styles.Button}>
<Text style={styles.Buttontext}>OK</Text>
</TouchableOpacity>
     
     </ScrollView>
    </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    top: {
      backgroundColor: "skyblue",
      padding:220,
      bottom:150,
      
  
    },
    top2: {
      backgroundColor:"white",
      padding: 170,
      paddingVertical: 50,
      paddingHorizontal: 190,
      marginLeft: 5,
      marginRight: 30,
      marginTop: 100,
      bottom:400,
      height: 150,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30, 
    },
    
    scrollContainer: {
      flexGrow: 2,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title:{
      fontWeight: "italic",
      fontSize:40,
      color:"black",
      marginTop: -500,
      marginBottom: 50,
      marginLeft: -20,
      
      },
      
    inputView: {
      width: '80%',
      backgroundColor: 'skyblue',
      borderRadius: 20,
      height: 60,
      marginBottom: 20,
      justifyContent: 'center',
      paddingHorizontal: 20,
      color: "black",
      marginLeft:-20,
      fontWeight: 'bold',
     
    },
         
    inputView1: {
      width: '80%',
      backgroundColor: 'skyblue',
      borderRadius: 20,
      height: 60,
      marginBottom: 20,
      justifyContent: 'center',
      paddingHorizontal: 20,
      color: "black",
      marginLeft:-20,
      fontWeight: 'bold',
      marginTop: 30,
     
    },
    
   
    inputText: {
      height: 50,
      color: 'black',
      marginLeft: 15,
      fontWeight: 'bold',
    },
   Button:{
    width:"50%",
    backgroundColor:"red",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
   
       
        },
    Buttontext:{
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
    },
  });
 
