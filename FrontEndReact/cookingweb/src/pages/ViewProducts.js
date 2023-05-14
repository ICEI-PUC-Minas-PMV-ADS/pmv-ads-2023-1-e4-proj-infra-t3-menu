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
    <div className="centered-list">
    <ul className="my-list">
        <li className="header-tabular">
          <span>ID</span>
          <span>Nome</span>
          <span>Valor unitário</span>
        </li>
        {products.map(item => (
          <li key={item.id}>
            <span className="id">{item.id}</span>
            <span className="nome">{item.name}</span>            
            <span className="Valor unitário">{item.price.toFixed(2)}</span>
          </li>
        ))}
    </ul>
    </div>
  );

};

export default ViewProducts;