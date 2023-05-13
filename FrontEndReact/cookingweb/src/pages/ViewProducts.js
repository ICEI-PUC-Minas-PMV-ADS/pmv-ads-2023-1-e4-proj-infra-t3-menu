import React, { useEffect, useState } from 'react';
// import { FlatList, View, StyleSheet } from 'react';
// import { List, Text, FAB, Button } from 'react';

// import Header from '../components/Header';
// import Container from '../components/Container';
// import Body from '../components/Body';
// import Logo from '../components/Logo';

//import {useUser} from '../contexts/UserContext';
import {getProdutos} from '../services/products.services';


function ViewProducts() {

//  const navigation = useNavigation();
  //const isFocused = useIsFocused();
  //const {name} = useUser();
  const [products, setProducts] = useState([]);

  useEffect(() => {    
    getProdutos().then(dados => {
      console.log(dados);
      if (dados) {
        setProducts(dados);
      }
    }).catch(error => {
      console.error('Erro ao buscar produtos:', error);
    });
  }, []);
  

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

};

export default ViewProducts;