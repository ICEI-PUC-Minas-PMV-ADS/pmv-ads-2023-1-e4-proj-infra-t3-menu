import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom'

function NavbarRes() {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const { userName } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("CD_Usuario");
        setIsLoggedIn(false);
        navigate("/");
    };



    return (
        <div className="bgNav"> 
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Container>
                <Link>
                    <img src="/img/logoteste.png" alt="Logo" width="60" height="60"
                        className="d-inline-block align-text-top" />
                </Link>
                <Navbar.Brand className="link-danger fw-bold" href="#" >Cooking Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">
                            <Link className="nav-link active link-danger fw-bold" to="/Catalogo">
                                Início
                            </Link>
                        </Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link href="/vieworders">
                                    <Link className="nav-link active link-danger fw-bold" to='/vieworders'>
                                        Meus Pedidos
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="/Carrinho">
                                    <Link className="nav-link active link-danger fw-bold" to="/Carrinho">   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor"
                                            class="bi bi-cart2" viewBox="2 0 12 23">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89
                             4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61
                              3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                               1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                                1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <Nav>
                        {/* Verifica se o usuário está logado antes de mostrar os botões */}
                        {isLoggedIn ? (
                            <>
                                <label className="nav-link active link-danger fw-bold">Bem-vindo(a), {userName}</label>

                                <button
                                    className="btn btn-outline-danger me-2"
                                    id="navButton"
                                    type="button"
                                    onClick={handleLogout}
                                >
                                    Sair
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Resto dos itens do Navbar */}
                                <Nav.Link>
                                    <Link to="/login">
                                        <button className="btn btn-outline-danger me-2" type="button">
                                            Entrar
                                        </button>
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/register">
                                        <button className="btn btn-danger" type="button">
                                            Registrar
                                        </button>
                                    </Link>
                                </Nav.Link>
                            </>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavbarRes;