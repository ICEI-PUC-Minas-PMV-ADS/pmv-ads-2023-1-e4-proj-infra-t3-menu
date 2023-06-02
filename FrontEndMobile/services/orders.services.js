import API from './webapi.services';
import {BASE_URL} from './urls';

export const getOrderById = async (param) => {
  try{       
    return await API.get(`${BASE_URL}/pedido/${param.searchCode}`,    
    ).then( 
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

export const getAllOrders = async () => {
  try{                
    return await API.get(`${BASE_URL}/pedido/allOrders`,    
    ).then( 
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

export const updateStatusOrder = async (param) => {
  try{
    return await API.patch(`${BASE_URL}/pedido/updateStatusOrder/${param.orderId}/${param.statusOrder}`).then( 
      response => {
        return response.status;
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


