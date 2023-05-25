import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Cadastro';
import PageHome from '../pages/PageHome';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="PageHome">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="PageHome"
        component={PageHome}
        options={{
          header: () => null,
        }}
      />            
    </Stack.Navigator>
  );
};

export default Auth;