import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 22px;
  margin: 32px auto;
  max-width: 90vw;
  border-radius: 10px;
  text-align: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid #EA1D2C;
  margin-bottom: 10px;
  background-color: rgba(209, 209, 209, 0.308);
  color:(primary-dark);  

  align-items: center;
  justify-content: center;
  // align-self: center;
`;

export const TitleProductsContainer = styled.div`
  color: white;
  padding: 3px; 
  border-bottom: 1px solid #FFF;
`;

export const ProductImg = styled.img`
  object-fit: contain ;
  border-radius: 8px 8px 0 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  grid-gap: 12px;
  color: white; 
`;
export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


