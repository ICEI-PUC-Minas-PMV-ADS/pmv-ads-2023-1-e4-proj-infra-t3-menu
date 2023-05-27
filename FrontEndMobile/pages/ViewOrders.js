import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getOrderById} from '../services/orders.services';
import { List, Text, FAB } from 'react-native-paper';

const ViewOrders = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  const handleFetchOrders = () => {
    fetchOrders();
  };

  const fetchOrders = async () => {
    try {            
      const response = await getOrderById({searchCode: "8849"});            
      setOrders([response]);
    } catch (error) {
      console.error('Erro ao buscar os pedidos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <List.Item style={styles.listaAgenda}
      title={'Id: ' + item.id + ' - ' + item.statusOrder}
      description={        
        'Horário:  ' + item.orderingDate + ''
      }  

      left={(props) => (
        <List.Icon
          {...props}
          color={item.statusOrder == 'Aguardando inicio' ? 'red' : 'green'}
          icon="soccer"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}
          {' '}
        </Text>
      )}      
      //jaque: continuar montando a navegação
      //onPress={() => navigation.navigate('EditOrder', { screen: 'ViewOrders' })}
      onPress={() => navigation.navigate('EditOrder')}
      
    />
  );  

  return (
    <View>
      <Text>Lista de Pedidos:</Text>
      <Button title="Buscar Pedidos" onPress={handleFetchOrders} />
      
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {/* <Button
          style={styles.fab}
          small          
          icon="plus"
          onPress={() => navigation.navigate('EditOrder')}
        /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({

  listaAgenda: {
    backgroundColor: '#10101010',         
  },

  telaAgenda: {
    backgroundColor: '#FFF',      
  },
  fab: {
    marginLeft: 40, 
    margin: 16,
    right: 0,
    bottom: 0,    
    backgroundColor: '#228B22',
    width: '80%',    
  },
});

export default ViewOrders;
