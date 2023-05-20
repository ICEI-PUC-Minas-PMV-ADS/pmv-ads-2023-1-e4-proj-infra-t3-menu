import styled from "styled-components";

export const Btn = styled.button`
  background: ${(props) =>
    props.color === "primary" ? "var(--primary)" : "var(--secondary)"};
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 12px;
  border-radius: 8px;
`;
