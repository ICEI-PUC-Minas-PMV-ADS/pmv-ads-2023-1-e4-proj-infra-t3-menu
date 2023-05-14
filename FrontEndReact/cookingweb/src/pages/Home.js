import React from 'react';
import '../styles/Home.css';

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="header">
        <nav>
          <h1>Cooking</h1>
          <ul class="header-buttons">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Cadastre-se</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/orders">Meus Pedidos</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho de Compras</Link>
            </li>            
          </ul>
        </nav>
      </div>

    </div>

  );
}

export default Home;
