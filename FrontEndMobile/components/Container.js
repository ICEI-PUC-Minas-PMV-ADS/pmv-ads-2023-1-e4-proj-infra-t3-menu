import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const Container = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/background2.jpg')}
      style={styles.backgroundImage}
    >

   <View style={styles.container}>{children}</View> 
   </ImageBackground>);
   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Container;
