import React, { useEffect, useState, useContext } from "react";
import { TitleProductsContainer, Product, ProductImg, ProductInfo, ProductsContainer } from "./styles";
import {getProdutos} from '../../services/products.services';
import Navbar from '../Navbar';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom'
import { Button} from '@mui/material';
import ProductDescription from "./ProductDescription";

const Catalogo = ({ setCarrinho }) => {

  const [products, setProducts] = useState([]);
  const [bebidas, setBebidas] = useState([]);  
  const [acompanhamentos, setAcompanhamentos] = useState([]); 

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchDatas = async () => {
    const response = await getProdutos('sanduiche');    
    setProducts(response);
  };

  const fetchBebidas = async () => {
    const response = await getProdutos('Bebida');
    setBebidas(response);
  };

  const fetchAcompanhamentos = async () => {
    const response = await getProdutos('acompanhamento');
    setAcompanhamentos(response);
  };  

  function addProductCarrinho(product) {   
    if(isLoggedIn) {
      const carrinho = localStorage.getItem("CARRINHO");
      const carrinhoAtual = JSON.parse(carrinho || "[]");
      const produtoEncontrado = carrinhoAtual.find(
        (produto) => produto.id === product.id
      );

      const products = {      
        id: product.id,
        name: product.name,      
        price: product.price,
        description: product.description
      };

      if (produtoEncontrado) {
        produtoEncontrado.quantity++;        
      } else {
        carrinhoAtual.push({ ...products, quantity: 1 });
      }
      alert('O produto foi adicionado ao carrinho');
    
      localStorage.setItem("CARRINHO", JSON.stringify(carrinhoAtual));
      //setCarrinho(carrinhoAtual)
    }
   else
    {
      navigate("/Login");
    }
  };

  useEffect(() => {
    fetchDatas();
    fetchBebidas();
    fetchAcompanhamentos();
  }, []);

  return (
    <>
      <main>
          <div>                  
              <Navbar />      
          </div>

        <TitleProductsContainer>
                <h2 style={{ margin: 0 }}>Sanduiches</h2>
        </TitleProductsContainer>

        <ProductsContainer>
          {products.map((product) => {
            return (
              <Product key={product.id}>
                <div style={{ margin: '0 auto' }}>
                  <ProductImg 
                      src={`img/${product.name.replace(/ /g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`} 
                      alt={product.name} 
                      width={200} 
                      height={200} 
                  />
                  
                </div>
                <ProductInfo>
                  <h3>{product.name}</h3>

                  <ProductDescription description={product.description} />              

                  <h3>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </h3>                  
                  <Button
                    color="error"  
                    variant="contained"                  
                    onClick={() => addProductCarrinho(product)}
                    
                  >
                    Adicionar ao carrinho
                  </Button>
                </ProductInfo>
              </Product>
            );
          })}
        </ProductsContainer>

        <TitleProductsContainer>
                <h2 style={{ margin: 0 }}>Acompanhamentos</h2>
        </TitleProductsContainer>

         <ProductsContainer>
          {acompanhamentos.map((product) => {
            return (
              <Product key={product.id}>
                <div style={{ margin: '0 auto' }}>
                  <ProductImg 
                      src={`img/${product.name.replace(/ /g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`} 
                      alt={product.name} 
                      width={200} 
                      height={200} 
                  />
                  
                </div>
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <h3>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </h3>                  
                <Button
                    color="error"  
                    variant="contained"                  
                    onClick={() => addProductCarrinho(product)}
                    
                  >
                    Adicionar ao carrinho
                  </Button>
                </ProductInfo>
              </Product>
            );
          })}
        </ProductsContainer>        
        <TitleProductsContainer>
                <h2 style={{ margin: 0 }}>Bebidas</h2>
        </TitleProductsContainer>

        <ProductsContainer>
          {bebidas.map((product) => {
            return (
              <Product key={product.id}>
                <div style={{ margin: '0 auto' }}>
                  <ProductImg 
                      src={`img/${product.name.replace(/ /g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`} 
                      alt={product.name} 
                      width={200} 
                      height={200} 
                  />
                  
                </div>
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <h3>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </h3>                  
                <Button
                    color="error"  
                    variant="contained"                  
                    onClick={() => addProductCarrinho(product)}
                    
                  >
                    Adicionar ao carrinho
                  </Button>
                </ProductInfo>
              </Product>
            );
          })}
        </ProductsContainer>

        
      </main>
    </>
  );
};

export default Catalogo;
