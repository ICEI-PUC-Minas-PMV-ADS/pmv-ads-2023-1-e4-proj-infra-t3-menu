import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet, SafeAreaView, ImageBackground, StatusBar,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getAllOrders} from '../services/orders.services';
import { List, Text} from 'react-native-paper';
import SearchButton from '../components/SearchButton';
import Logo from '../components/Logo';
import moment from 'moment';

const statusBarHeight = StatusBar.currentHeight;

const ViewOrders = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  const handleFetchOrders = () => {
    fetchOrders();
  };

  const fetchOrders = async () => {
    try {                  
      const response = await getAllOrders();                  
      setOrders(response);      
    } catch (error) {
      console.error('Erro ao buscar os pedidos:', error);
    }
  };


  const renderItem = ({ item }) => {
    const orderingDateTime = moment(item.orderingDate).format('DD/MM/YYYY HH:mm');
  
    return (
      <List.Item
        style={styles.list}
        title={item.id + ' - ' + item.statusOrder}
        description={`Horário: ${orderingDateTime}`}
        left={(props) => (
          <List.Icon
            {...props}
            color={item.statusOrder === 'Aguardando inicio' ? 'red' : 'green'}
            icon="account-clock"
          />
        )}
        right={(props) => (
          <Text {...props} style={{ alignSelf: 'center' }}>
            { }
            {item.user.name}
            {   }
          </Text>
        )}
        onPress={() => navigation.navigate('EditOrder', { item })}
      />
    );
  };

  return (     
    <ImageBackground
      source={require('../assets/background2.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <Text style={styles.text1}>Fila de Pedidos</Text>
        
        <SearchButton onPress={handleFetchOrders} />

        <View style={styles.content}>
          <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          </View>
        
      </SafeAreaView>
    </ImageBackground>     
    
  );
};

const styles = StyleSheet.create({

  list: {
    backgroundColor: '#10101010',
    // backgroundColor: 'black',
    
  },

  container: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,    
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 2,
  },
  row: {
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    paddingBottom: 30,
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
    backgroundColor: 'white',   
    alignContent: 'center',
    flexDirection: 'row',    
  },  
  text1: {
    marginBottom: 10,
    color: 'white',
    alignSelf: 'center',
    fontSize: 25
  },
});

export default ViewOrders;
