import { React } from "react";
import { Header, Logo, Nav, UserDropdown, CartCount, LogoImg, CartBtn } from "./styles";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import logo from "../../styles/imgs/logo.png";
import { getRole, logout } from "../../services/auth";
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';

function Menu({ carrinho }) {
  var quantidade = carrinho.length > 0 ? carrinho.flatMap((e) => e.quantidade).reduce((a, b) => a + b) : 0;
  const role = getRole();

  return (
    <>
      <Header>
        <Logo href="/">
          <LogoImg src={logo} />
          SpotFlautas
        </Logo>
        <Nav>
          <UserDropdown className="user-dropdown">
            Ola!
            <button onClick={() => {
              logout();
              window.location.href = "/login";
          }}>
              Entrar na minha conta!
              <FaCaretDown />
            </button>
          </UserDropdown>
          {role === "ADMIN" || role === 'GERENTE_ESTOQUE' ? (
            <>
              <CartBtn onClick={() => {
                window.location.href = "/estoque";
              }} className="cart-btn" >
                <div className="cart-icon">
                  <InventoryIcon />
                </div>
                <p>Estoque</p>
              </CartBtn>
              <CartBtn onClick={() => {
                window.location.href = "/pedidos";
              }} className="cart-btn" >
                <div className="cart-icon">
                  <ReceiptIcon />
                </div>
                <p>Pedidos</p>
              </CartBtn>
              </>
          ) : (<></>)}

          <CartBtn onClick={() => {
            window.location.href = "/carrinho";
          }} className="cart-btn" >
            <div className="cart-icon">
              <FaShoppingCart />
              <CartCount>{quantidade}</CartCount>
            </div>
            <p>Carrinho</p>
          </CartBtn>
        </Nav>
      </Header>
    </>
  );
}

export default Menu;
