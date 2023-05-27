import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
    console.log('estou na register');
    console.log(param);

    return await API.post(`${BASE_URL}/usuario`, param).then( 
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

export const login = async (param) => {
  try{
console.log('param no login');    
console.log(param);
console.log(`${BASE_URL}/usuario/login`);
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