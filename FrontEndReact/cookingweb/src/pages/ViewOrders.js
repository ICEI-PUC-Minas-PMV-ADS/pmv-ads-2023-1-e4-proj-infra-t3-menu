import React, { useEffect, useState } from 'react';
import {getallByUser} from '../services/orders.services';
import '../styles/ViewOrders.css';


function ViewOrders() {

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
        <li className="header-tabular">
          <span className="id">ID</span>
          <span className="status">Status</span>
          <span className="total">Total a pagar</span>
        </li>
        {orders.map(item => (
          <li key={item.id}>
            <span className="id">{item.id}</span>
            <span className="status">{item.statusOrder}</span>            
            <span className="total">{item.totalValue.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default ViewOrders;