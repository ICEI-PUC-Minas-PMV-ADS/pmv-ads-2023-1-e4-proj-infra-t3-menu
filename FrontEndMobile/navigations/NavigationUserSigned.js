import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationHome from './NavigationHome';
import PageHome from '../pages/PageHome';
import EditOrder from '../pages/EditOrder';
const Stack = createNativeStackNavigator();

const NavigationUserSigned = () => {  
  return (
    <Stack.Navigator initialRouteName="NavigationHome">

      <Stack.Screen
        name="NavigationHome"
        component={NavigationHome}
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
      <Stack.Screen
        name="EditOrder"
        component={EditOrder}
        options={{
          header: () => null,
        }}
      />     

    </Stack.Navigator>
  );
};

export default NavigationUserSigned;