import React, {useRef, useEffect} from 'react';
import {Animated, View, Image, Button } from 'react-native';



const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
      
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 550,
          height: 1200,
          backgroundColor: 'skyblue',
        }}>
          <Image source={require('../ex2/assets/mainlogo.png')} 
       style={{
        width: 100, 
        height: 100,  
        alignSelf: 'center',
        margin: 400,
        
        }} />  
        <Button title='next'/> 
         
      </FadeInView>
       </View>
  );
};

