import React from 'react';
import { Appbar, } from 'react-native-paper';
import { StyleSheet, } from 'react-native';


const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header style={styles.Header}>
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'red',
    
    height: '1%',
    width: '100%',
    // marginTop: 30,
    marginBottom: 12,
  },
});

export default Header;