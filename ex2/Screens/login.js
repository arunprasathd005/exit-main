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
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App =  () => {
const onPressLogin = () => {
// Do something about login operation
};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
email: '',
password: '',
})
return (
<SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.top}></View>
      
      <View style={styles.top2}>
          
      </View>

        
        
    
<Text style={styles.title}> Login </Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
onChangeText={text => setState({email:text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setState({password:text})}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressSignUp}>
<Text style={styles.forgotAndSignUpText}>Signup</Text>
</TouchableOpacity>
</ScrollView>
    </SafeAreaView>

);
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
forgotAndSignUpText:{
color:"black",
fontSize:17
},
loginBtn:{
width:"80%",
backgroundColor:"red",
borderRadius:20,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
loginText:
{
  fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
},
});
export default App;