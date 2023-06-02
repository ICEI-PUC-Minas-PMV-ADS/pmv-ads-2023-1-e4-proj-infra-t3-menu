import { React, useState, useEffect, useContext } from "react";
import { Product, ProductImg, ProductInfo, ProductsContainer } from "./styles";
import Button from "../../components/Button/button";
import { createOrder } from '../../services/orders.services';
import { getUserLocalStorage, getUserById } from '../../services/auth.services';
import Navbar from "../Navbar";
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom'

export const Carrinho = ({ setCarrinho }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);  
  const carrinho = JSON.parse(localStorage.getItem("CARRINHO") || "[]");
  const [totalCompra, setTotalCompra] = useState(0);
  const navigate = useNavigate()

  function atualizarTotalCompra() {
    const total = carrinho.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    setTotalCompra(total.toFixed(2));
  }

  function aumentarQuantidade(id) {
    const index = carrinho.findIndex(
      (item) => item.id === id
    );
    carrinho[index].quantity++;
    localStorage.setItem("CARRINHO", JSON.stringify(carrinho));
    setCarrinho(carrinho);
    atualizarTotalCompra();  
  }

  function diminuirQuantidade(id) {
    const index = carrinho.findIndex(
      (item) => item.id === id
    );
    if (carrinho[index].quantity > 1) {
      carrinho[index].quantity--;
      localStorage.setItem("CARRINHO", JSON.stringify(carrinho));
      setCarrinho(carrinho);
      atualizarTotalCompra();
    }
  }

  function excluirItem(id) {
    const index = carrinho.findIndex(
      (item) => item.id === id
    );
    carrinho.splice(index, 1);
    localStorage.setItem("CARRINHO", JSON.stringify(carrinho));
    setCarrinho(carrinho)
    atualizarTotalCompra();
  }


  async function finalizarCompra() {        
    
    const userLogado = await getUserLocalStorage();

    const u = await getUserById(userLogado.userId); 
    const user = {
        id: userLogado.userId,
        name: u.name,
        email: u.email
    }

    atualizarTotalCompra();

    const pedido = {
        user: user,
        orderingDate: new Date(),        
        products: carrinho,
        totalValue: totalCompra      
    };
    createOrder(pedido)
    .then(response => {      
      alert('Código do pedido criado: '+response.data.id);
      localStorage.removeItem("CARRINHO");      
    })
    .catch(error => {
      console.error('Erro ao criar pedido:', error);
    });
  }

  useEffect(() => {
    if (isLoggedIn)
      atualizarTotalCompra();
    else {
      navigate("/Login");
    }         
  }, []);

  return (
    <>
    <main>    
      <div>      
        <Navbar />      
      </div>

      <ProductsContainer>
        {carrinho.map((product) => {
          return (
            <Product key={product.id}>
              
              <div style={{ margin: "0 auto" }}>
                <ProductImg                
                  src={`img/${product.name.replace(/ /g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`}
                  alt={product.name}
                  width={120}
                  height={120}
                />
              </div>
              <ProductInfo>
                <h4>{product.name}</h4>
                <h4> Valor unitário: &nbsp;
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h4>
                {/* <p style={{ textAlign: 'right' }}>Quantidade:</p> */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button func={() => diminuirQuantidade(product.id)} text={"-"}>
                    -
                  </Button>
                  <span style={{ padding: 10 }}>{product.quantity}</span>
                  <Button func={() => aumentarQuantidade(product.id)} text={"+"}>
                    +
                  </Button>
                  <Button
                    func={() => excluirItem(product.id)}
                    text={"Excluir"}
                  >
                    Excluir
                  </Button>
                </div>
              </ProductInfo>
            </Product>
          );
        })}
      </ProductsContainer>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', color: 'white' }}>        
        <h2 style={{ marginBottom: '10px'}}>Total da compra: {totalCompra}</h2>
                
        <Button
          width
          func={finalizarCompra}
          text={"Finalizar compra"}
          style={{ marginTop: '10px' }}
        >
          Finalizar compra
        </Button>
      </div>
     
    </main>
    </>
  );
}; 