import React, { useState, useEffect } from 'react';
import {View, Button, ImageBackground} from 'react-native';
import { Text } from 'react-native-paper';

const EditOrder = () => {
    console.log('estou na EditOrder');
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
      <Text>Feed Screen</Text>
      <Button title="Go to View" onPress={() => navigation.navigate('ViewOrders')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('ViewOrders')}
      />
    </View>
}  

export default EditOrder;