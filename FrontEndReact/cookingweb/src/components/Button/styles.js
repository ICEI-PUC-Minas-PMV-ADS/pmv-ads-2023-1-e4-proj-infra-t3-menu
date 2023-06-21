import styled from "styled-components";

export const Btn = styled.button`
  background: ${(props) =>
    props.color === "primary" ? "var(--primary)" : "var(--secondary)"};
  color: white;
  background: rgba(209, 209, 209, 0.308);
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;
