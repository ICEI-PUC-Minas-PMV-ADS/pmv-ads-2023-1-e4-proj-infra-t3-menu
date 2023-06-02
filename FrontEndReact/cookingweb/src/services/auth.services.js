import API from './webapi.services';
import {BASE_URL} from './urls';

export const register = async (param) => {
  try{
    return await API.post(`${BASE_URL}/usuario`, param).then( 
      response => {
        return response;
      },
      error =>{
        return  null;
      }
    );
  }catch(error){
    return null;
  }
}

const gravaUserLogadoLocalStorage = async (token, userId) => {  
  var usuario = {
    token: token, userId 
  }  
  localStorage.setItem('CD_Usuario', JSON.stringify(usuario));   
} 

export const getUserLocalStorage = async () => {      
  var strJSON = JSON.parse(localStorage.getItem('CD_Usuario'));

  if(strJSON != null)
  {      
      return { userId: strJSON["userId"], token: strJSON["token"] };
  }   
} 

export const authenticate = async (param) => {   
  return await API.post(`${BASE_URL}/usuario/login`, param)
  .then(response => {
    if (response && response.data) {
      gravaUserLogadoLocalStorage(response.data.jwtToken, param.id);
      return response.data;
    } else {
      return null;
    }
  })
  .catch(error => {        
    return null;
  });

}

export const getUserById = async (param) => {
  try{
    const userLogado = await getUserLocalStorage();
    
    return await API.get(`${BASE_URL}/usuario/${param}`, 
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