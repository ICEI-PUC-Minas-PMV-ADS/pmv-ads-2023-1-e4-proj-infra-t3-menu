import API from './webapi.services';
import {BASE_URL} from './urls';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyNSIsInJvbGUiOiJFbXByZWdhZG8iLCJuYmYiOjE2ODM5MjkwMzMsImV4cCI6MTY4Mzk1NzgzMiwiaWF0IjoxNjgzOTI5MDMzfQ.celGLPMg1ue_-GF9CrUf5_bXjoKQGA1HH-vnf1USjro';

export const getProdutos = async () => {
  try{
    return await API.get(`${BASE_URL}/produto`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
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