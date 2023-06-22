import styled from "styled-components";

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 24px;
margin: 32px;

@media (max-width: 1200px) {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 992px) {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 576px) {
  grid-template-columns: 1fr;
}
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid #EA1D2C;
  background-color: rgba(209, 209, 209, 0.308);
`;

export const ProductImg = styled.img`
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  grid-gap: 12px;
  color: #FFF;
`;
