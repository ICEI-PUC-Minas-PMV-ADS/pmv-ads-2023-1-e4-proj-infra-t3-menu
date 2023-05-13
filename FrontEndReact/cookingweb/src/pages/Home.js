import React from 'react';
import '../styles/Home.css';


import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="header">
        <nav>
          <h1>Cooking</h1>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Cadastre-se</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Produto</Link>
            </li>
            <li>
              <Link to="/orders">Pedido</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>

  );
}

export default Home;