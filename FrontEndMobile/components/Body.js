import React from 'react';
import {StyleSheet, View} from 'react-native';

const Body = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
  container:{
    width: '95%',       
    flex: 1 ,
  },
});

export default Body;