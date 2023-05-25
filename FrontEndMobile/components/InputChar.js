import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputChar = (props) => {
  return (
      <TextInput 
        style={styles.input}         
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {
    width: '80%',          
    marginBottom: 10,    
    fontSize: 15,
    borderRadius :5, 
  },
});

export default InputChar;