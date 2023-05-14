import API from './webapi.services';
import {BASE_URL} from './urls';

const token = '';

export const getOrders = async () => {
  try{
    return await API.get(`${BASE_URL}/pedido/6285`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const getallByUser = async () => {
  try{
    return await API.get(`${BASE_URL}/pedido/allByUser/25`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const createOrder = async (param) => {
  try{
    return await API.post(`${BASE_URL}/pedido`, param).then( 
      response => {
        console.log('response.data no createOrder: ');
        console.log(response.data);
        return response;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

