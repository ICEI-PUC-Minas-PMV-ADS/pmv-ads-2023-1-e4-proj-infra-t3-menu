import API from './webapi.services';
import {BASE_URL} from './urls';

export const getAllProducts = async () => {
  try{    
    return await API.get(`${BASE_URL}/produto`)
    .then(response => {
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

