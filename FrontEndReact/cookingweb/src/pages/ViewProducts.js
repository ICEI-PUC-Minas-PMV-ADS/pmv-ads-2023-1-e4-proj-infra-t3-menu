import React, { useEffect, useState } from 'react';
import {getProdutos} from '../services/products.services';

function ViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {    
    getProdutos().then(dados => {      
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