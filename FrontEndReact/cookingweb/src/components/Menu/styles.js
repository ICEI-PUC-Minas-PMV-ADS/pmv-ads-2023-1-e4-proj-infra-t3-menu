import styled from "styled-components";

export const Header = styled.header`
  background: var(--primary);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

export const Logo = styled.a`
  color: white;
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  display: flex;
  align-items: center;
  grid-gap: 40px;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  grid-gap: 38px;
  align-items: center;
`;

export const CartCount = styled.span`
  display: inline-block;
  background: #ff5e00;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;

export const UserDropdown = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;

  button {
    font-size: 14px;
    color: white;
  }
`;

export const CartBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;

  color: white;
  font-size: 14px;

  svg {
    font-size: 24px;
  }
`;
