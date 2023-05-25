import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Header = (props) => {
  return (
      <TextInput 
        style={styles.input} 
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {    
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF0000',
    marginTop: 8 ,    
    width: '100%',          
    marginBottom: 10,    
    fontSize: 15,
    borderRadius :10, 
  },
});

export default Header;