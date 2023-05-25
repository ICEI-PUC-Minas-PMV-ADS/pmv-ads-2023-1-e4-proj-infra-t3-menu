import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './contexts/UserContext';
import Route from './navigations/Route';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>        
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({

});
