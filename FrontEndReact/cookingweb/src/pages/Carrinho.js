import React, { useState, useEffect } from "react";

import {getProdutos} from '../services/products.services';
import {createOrder} from '../services/orders.services';
import '../styles/Carrinho.css';

function Carrinho() {  
  const [productsList, setProductsList] = useState([]); 

  const [orderId, setOrderId] = useState(null);

  const [products, setProducts] = useState([
    { id: "", name: "", quantity: 0, price: 0 }
  ]);  

  useEffect(() => {    
    getProdutos().then(dados => {            
      if (dados) {
        setProductsList(dados);
        console.log(dados);
      }
    }).catch(error => {
      console.error('Erro ao buscar produtos:', error);
    });
  }, []);

  const handleAddProduct = (selectedProduct) => {
    const newProduct = { id: selectedProduct.id, name: selectedProduct.name, quantity: 1, price: selectedProduct.price };
    setProducts([...products, newProduct]);
  };

  
  const handleProductChange = (index, event) => {
    const productName = event.target.value;
    const selectedProduct = productsList.find((product) => product.name === productName);    
  
    if (selectedProduct) { // verifique se o produto selecionado existe
      const { name } = event.target;
      const list = [...products];

      if (list[index]) { // verifique se o elemento existe antes de acessá-lo        
        console.log('preenchendo lista - index: '+index);
        list[index].id = selectedProduct.id; // use o valor do produto selecionado
        list[index].name = selectedProduct.name; // use o valor do produto selecionado
        list[index].quantity = 1; //selectedProduct.quantity; // atribua o valor de quantidade do produto selecionado
        list[index].price = selectedProduct.price; // atribua o valor de preço do produto selecionado
        setProducts(list);
      } else {
        console.log('não preenchi lista');
      }
    } else {
      console.log('produto não encontrado');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.user = { id: 25, name: "jaque", email: "jaque@gmail.com" };
    data.products = products.filter((p) => p.id !== "");    
    data.totalValue = data.products.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );
    console.log('data no handleSubmit:');
    console.log(data);

    const pedido = {
      user: data.user,
      orderingDate: new Date(),
      products: products,
      totalValue: data.totalValue      
    };

    // Aqui você pode enviar o pedido para o backend
    let body = JSON.stringify(data);  

    createOrder(pedido)
      .then(response => {
        setOrderId(response.data.id); // guardar o numero do pedido criado
      })
      .catch(error => {
        console.error('Erro ao criar pedido:', error);
      });        

  };

  // Dados do usuário logado, que serão utilizados para preencher os campos do formulário
  const userLogado = {
    id: 25,
    name: "Jaque",
    email: "jaque@gmail.com",
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Meu carrinho</h1>
      <select id="product-list" name="productName" onChange={(e) => handleProductChange(0, e)}>      
        <option value="">Selecione um produto</option>
        {productsList.map((product) => (
            <option key={product.id} value={product.name}>{product.name}</option>
        ))}
      </select>
      <button type="button" className="button" onClick={handleAddProduct}>
        Adionar item no carrinho   
      </button>
      {products.map((product, index) => (
        <div key={index}>          
          <input
            type="text"
            id={`product-${index}-name`}
            name={`products[${index}].name`}
            placeholder='Product Name'
            value={product.name}
            onChange={(e) => handleProductChange(index, e)}
          />
          <input
            type="number"
            id={`product-${index}-quantity`}
            name={`products[${index}].quantity`}
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) => handleProductChange(index, e)}
          />
          <input
            type="number"
            id={`product-${index}-price`}
            name={`products[${index}].price`}
            placeholder="Price"
            value={product.price}
            onChange={(e) => handleProductChange(index, e)}
          />
          <input type="hidden" name="user[id]" value={userLogado.id} />
          <input type="hidden" name="user[name]" value={userLogado.name} />
          <input type="hidden" name="user[email]" value={userLogado.email} />            
        </div>
      ))}      
      <button type="submit" className="button">Concluir o pedido</button>
    </form>
    
          {orderId && (
            <div className="success-message">
              <p style={{ color: 'white' }}>Pedido criado com sucesso!</p>
              <p style={{ color: 'white' }}>Número do pedido: {orderId}</p>
            </div>
          )}
          </div>
  );
}

export default Carrinho;
