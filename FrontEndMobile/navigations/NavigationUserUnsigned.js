import * as React from 'react';
import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from '../pages/Login';
import Register from '../pages/Cadastro';
import PageHome from '../pages/PageHome';

const Tab = createBottomTabNavigator();


export default function NavigationUserUnsigned() {
  return (
    <Tab.Navigator initialRouteName="Cooking Digital">
      {/* <Tab.Screen
        name="COOKING DIGITAL"
        component={PageHome}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#FF0000'} size={size} />
          ),
        }}
      />       */}
      <Tab.Screen
        name="Acesso restrito"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#FF0000'} size={size} />
          ),
        }}
      /> 

      <Tab.Screen
        name="CADASTRO"
        component={Register}        
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#FF0000'} size={size} />
          ),          
        }}
      />           
    </Tab.Navigator>
  );
}

