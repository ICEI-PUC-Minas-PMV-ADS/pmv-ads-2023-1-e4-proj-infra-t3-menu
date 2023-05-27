import API from './webapi.services';
import {BASE_URL} from './urls';
import {useUser} from '../contexts/UserContext';

export const getOrderById = async (param) => {
  try{    
    //const {name, jwtToken} = useUser();

    //console.log('estou getOrderById - jwtToken: '+jwtToken);
    //console.log('estou getOrderById - name: '+name);
    console.log('param no getOrderById');
    console.log(param);
    
    return await API.get(`${BASE_URL}/pedido/${param.searchCode}`,
    // {
    //   headers: {
    //     'Authorization': `Bearer ${jwtToken}`,
    //     'Content-Type': 'application/json'
    //   }
    // }
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