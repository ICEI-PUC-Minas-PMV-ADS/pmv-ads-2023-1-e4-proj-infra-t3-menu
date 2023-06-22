import React from 'react';
import {StyleSheet, View,ImageBackground} from 'react';

const Container = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../public/img/background2.png')}
      style={styles.backgroundImage}
    >
   <View style={styles.container}>{children}</View> 
   </ImageBackground>);
   
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Container;