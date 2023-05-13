import React, { useEffect, useState } from 'react';
// import { FlatList, View, StyleSheet } from 'react';
// import { List, Text, FAB, Button } from 'react';

// import Header from '../components/Header';
// import Container from '../components/Container';
// import Body from '../components/Body';
// import Logo from '../components/Logo';

//import {useUser} from '../contexts/UserContext';
import {getallByUser} from '../services/orders.services';
import '../styles/ViewOrders.css';


function ViewOrders() {

//  const navigation = useNavigation();
  //const isFocused = useIsFocused();
  //const {name} = useUser();
  const [orders, setOrders] = useState([]);

   useEffect(() => {    
    getallByUser().then(dados => {            
      if (dados) {
          setOrders(dados);
      }
    }).catch(error => {
      console.error('Erro ao buscar pedidos:', error);
    });
  }, []);

  return (
    <div className="centered-list">
      <ul className="my-list">
        {orders.map(item => (
          <li key={item.id}>{'Pedido: ' + item.id + ' - Status: ' + item.statusOrder + ' - Valor a pagar: ' + item.totalValue}</li>
        ))}
      </ul>
    </div>
  );

};

export default ViewOrders;