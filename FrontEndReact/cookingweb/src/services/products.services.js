import API from './webapi.services';
import {BASE_URL} from './urls';

export const getProdutos = async (categ) => {
  try{  
    const sURL = `${BASE_URL}/produto/GetAllCateg/${categ}`;      
    return await API.get(sURL)
    .then(response => {
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