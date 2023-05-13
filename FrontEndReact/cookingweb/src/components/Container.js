import React from 'react';
import {StyleSheet, View} from 'react';

const Container = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor: '#000000',
  },
});

export default Container;