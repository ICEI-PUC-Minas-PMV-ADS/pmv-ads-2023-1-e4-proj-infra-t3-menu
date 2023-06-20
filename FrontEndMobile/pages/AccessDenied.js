﻿import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, ImageBackground} from 'react-native';
  
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/native';
  
  const statusBarHeight = StatusBar.currentHeight;
  
  const AccessDenied = () => {    
    const navigation = useNavigation();
    return (
      <ImageBackground
        source={require('../assets/background2.jpg')}
        style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logo}>
            <Logo />
            <Text style={styles.text1}>COOKING DIGITAL</Text>
            <Text style={styles.text1}>Usuário/Senha inválidos ou acesso negado.</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? statusBarHeight : 2,
    },
    backgroundImage: {
      flex: 1,
      height: '100%',
      resizeMode: 'cover',
    },
    logo: {
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 12,
    },
    content: {
      alignSelf: 'center',
      flex: 1,
      fontSize: 'large',
      borderRadius: 5,
      borderWidth: 1, 
      margin: 10, 
      borderColor: '#FF0000',
      padding: 0,
      width: '100%',
      height: '100%',
      marginBottom: 10,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1: {
      marginBottom: 10,
      color: 'white',
      alignSelf: 'center',
      fontSize: 25
    },
  });

  export default AccessDenied;
  