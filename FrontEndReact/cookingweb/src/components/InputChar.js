import React from 'react';
import { StyleSheet } from 'react';
import { TextInput } from 'react';

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
    backgroundColor: '#FFF',      
    width: '80%',          
    marginBottom: 10,    
    fontSize: 15,
    borderRadius :5, 
  },
});

export default InputChar;