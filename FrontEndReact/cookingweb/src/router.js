import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import React, {useState} from 'react';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import {ViewOrders} from './pages/ViewOrders/ViewOrders.js';
import ViewProducts from './pages/ViewProducts.js';
import {Carrinho} from './pages/carrinho/Carrinhos.js';
import Catalogo from "./pages/catalogo/Catalogo.js";
import {UserContext} from './pages/UserContext.js';


export default function Router() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("CARRINHO") || "[]"));
    
    return (
        <BrowserRouter>
          <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Routes>
              <Route path="/" element={<Catalogo setCarrinho={setCarrinho} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<ViewProducts />} />
              <Route path="/ViewOrders" element={<ViewOrders />} />
              <Route path="/Carrinho" element={<Carrinho setCarrinho={setCarrinho} />} />              
              <Route path="/catalogo" element={<Catalogo setCarrinho={setCarrinho} />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      );
}