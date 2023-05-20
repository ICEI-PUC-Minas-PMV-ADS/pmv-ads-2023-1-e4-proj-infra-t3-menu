import styled from "styled-components";

export const ProductsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 24px;
  margin: 32px auto;
  width: 70vw;
  border-radius: 10px;
  background-color:   rgba(209, 209, 209, 0.308);
  text-align: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;  
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: var(--background);
  color: var(--primary-dark);  

  align-items: center;
  justify-content: center;
  // align-self: center;
`;

export const TitleProductsContainer = styled.div`
  background-color: black; 
  color: white;
  padding: 3px; 
  border: 1px solid black;
  width: 100%;
`;

export const ProductImg = styled.img`
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  grid-gap: 12px;
  color: white; 
`;
