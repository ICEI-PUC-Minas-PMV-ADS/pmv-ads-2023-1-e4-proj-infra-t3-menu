import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/usuario`, param).then( 
      response => {
        console.log('response.data no auth: ');
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

export const authenticate = async (param) => {
  try{
    return await API.post(`${BASE_URL}/usuario/login`, param).then( 
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