import React from 'react';
import {StyleSheet, Image} from 'react';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/Fut.png')} />
};

const styles = StyleSheet.create({
image: {    
    width:'100%',
    height:128,
    borderRadius: 30,
    marginBottom: 5,
  },
});

export default Logo;