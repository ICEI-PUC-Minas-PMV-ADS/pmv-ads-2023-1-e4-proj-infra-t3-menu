import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
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
    return await API.post(`${BASE_URL}/usuario/login`, param).then( 
      response => {        
        return response.data;
      },
      error =>{
        //console.error('error na api.post: '+error);        
        return  error;
      }
    );
  }catch(error){
    //console.error('catch na api.post'+error);
    return null;
  }
}