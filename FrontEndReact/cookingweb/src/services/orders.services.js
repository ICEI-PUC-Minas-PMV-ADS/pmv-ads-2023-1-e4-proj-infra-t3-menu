import API from './webapi.services';
import {BASE_URL} from './urls';
import { getUserLocalStorage } from './auth.services';

export const getOrderById = async (param) => {
  try{
    const userLogado = await getUserLocalStorage();
    
    return await API.get(`${BASE_URL}/pedido/${param.searchCode}`,{
      headers: {
        'Authorization': `Bearer ${userLogado.token}`,
        'Content-Type': 'application/json'
      }
    }).then( 
      response => {
        return response.data;
      },
      error =>{        
        return  null;
      }
    );
  }catch(error){
    return null;
  }
}

export const getallByUser = async () => {
  try{    
    const userLogado = await getUserLocalStorage();
    return await API.get(`${BASE_URL}/pedido/allByUser/${userLogado.userId}`,
    {
      headers: {
        'Authorization': `Bearer ${userLogado.token}`,
        'Content-Type': 'application/json'
      }
    }).then( 
      response => {
        return response.data;
      },
      error =>{        
        return  null;
      }
    );
  }catch(error){    
    return null;
  }
}

export const createOrder = async (param) => {
  try {
    const userLogado = await getUserLocalStorage();    
    const response = await API.post(`${BASE_URL}/pedido`, 
      param, 
      {headers: {
        'Authorization': `Bearer ${userLogado.token}`,
        'Content-Type': 'application/json'
      }}
    );
    
    return response;
  } catch (error) {    
    return null;
  }
}

export const cancelOrder = async (orderId) => {  
  
  let statusOrder = 'Cancelado';

    try {
      const userLogado = await getUserLocalStorage();    
      const response = await API.patch(`${BASE_URL}/pedido/updateStatusOrder/${orderId}/${statusOrder}`,
      {}, // Dados vazios, já que não há corpo na requisição PATCH
      {headers: {
        'Authorization': `Bearer ${userLogado.token}`,
        'Content-Type': 'application/json'
      }}
    );
    
    return response;
  } catch (error) {    
    return null;
  }
};


