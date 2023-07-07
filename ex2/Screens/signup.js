import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
  });

  const handleGenderChange = (gender) => {
    setState({ ...state, gender });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.top}></View>
      
      <View style={styles.top2}>
          
      </View>

        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(text) => setState({ ...state, email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => setState({ ...state, password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            placeholderTextColor="black"
            onChangeText={(text) => setState({ ...state, name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Age"
            placeholderTextColor="black"
            onChangeText={(text) => setState({ ...state, age: text })}
          />
        </View>

        <View style={styles.inputView}>
        
          <Picker
            style={styles.inputText1}
            selectedValue={state.gender}
            onValueChange={(itemValue) => setState({ ...state, gender: itemValue })}
          >
            <Picker.Item label="Select Gender" value=""  />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Picker
            style={styles.inputText1}
            selectedValue={state.height}
            onValueChange={(itemValue) => setState({ ...state, height: itemValue })}
          >
            <Picker.Item label="Height" value="" />
            <Picker.Item label="120 cm" value="120" />
            <Picker.Item label="130 cm" value="130" />
            <Picker.Item label="140 cm" value="140" />
            <Picker.Item label="150 cm" value="150" />
            <Picker.Item label="160 cm" value="160" />
            <Picker.Item label="170 cm" value="170" />
            <Picker.Item label="180 cm" value="180" />
            <Picker.Item label="190 cm" value="190" />
            <Picker.Item label="200 cm" value="200" />
            {/* Add more height options as needed */}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Picker
            style={styles.inputText1}
            selectedValue={state.weight}
            onValueChange={(itemValue) => setState({ ...state, weight: itemValue })}
          >
            <Picker.Item label="Weight" value="" />
            <Picker.Item label="50 kg" value="30" />
            <Picker.Item label="50 kg" value="40" />
            <Picker.Item label="50 kg" value="50" />
            <Picker.Item label="60 kg" value="60" />
            <Picker.Item label="70 kg" value="70" />
            <Picker.Item label="80 kg" value="80" />
            <Picker.Item label="90 kg" value="90" />
            <Picker.Item label="100 kg" value="100" />
            {/* Add more weight options as needed */}
          </Picker>
        </View>

        <TouchableOpacity onPress={onPressSignUp} style={styles.signBtn}>
          <Text style={styles.signBtnText}>SIGN UP</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  logo: {
    width: 420,
    height: 200,
    alignSelf: 'center',
    top: 31,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title:{
    fontWeight: "italic",
    fontSize:40,
    color:"black",
    marginTop: -450,
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
  
 
  inputText: {
    height: 50,
    color: 'black',
    marginLeft: 15,
  },
  inputText1: {
    height: 50,
    color: 'black',
    marginLeft: 0,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#003f5c',
    fontSize: 16,
    color:"black"
  },
  
  
  signBtn: {
    width: '40%',
    backgroundColor: "red",
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  signBtnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    
  },
});

export default App;