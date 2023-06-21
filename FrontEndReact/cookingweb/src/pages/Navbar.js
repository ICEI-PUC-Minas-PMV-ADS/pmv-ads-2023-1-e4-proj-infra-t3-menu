import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom'

function Navbar() {    
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const { userName } = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("CD_Usuario");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <>            
            <header className="align-items-center justify-content-end">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid"> 
                        <a className="navbar-brand" href="/">
                            <img src="/img/logoteste.png" alt="Logo" width="60" height="60"
                                className="d-inline-block align-text-top"/>
                        </a>                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>                                                                        
                        <ul className="navbar-nav me-auto nav-fill mt-2 mb-2 mb-lg-0">                            
                            <li className="nav-item flex-grow-1">
                                 <Link
                                    className="nav-link active link-danger fw-bold"
                                    to="/Catalogo"
                                > Início
                                </Link>
                            </li>                             
                            {/* Verifica se o usuário está logado antes de mostrar os botões */}
                            {isLoggedIn ? (
                                <>                                
                                    <li className="nav-item flex-grow-1">
                                        <Link
                                            className="nav-link active link-danger fw-bold"
                                            to="/vieworders"
                                        >
                                            Meus Pedidos
                                        </Link>
                                    </li>

                                    <li className="nav-item flex-grow-1">
                                        <Link className="nav-link active link-danger fw-bold" to="/Carrinho">
                                        <a class="icon-link m-2" href="carrinho.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor"
                                    class="bi bi-cart2" viewBox="0 5 15 10">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89
                             4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61
                              3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                               1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                                1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg></a>                                            
                                        </Link>
                                    </li>                                                                                                           
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </ul>

                        <ul className="navbar-nav ml-auto">                                                        
                            {/* Verifica se o usuário está logado antes de mostrar os botões */}
                            {isLoggedIn ? (
                                <>        
                                    <li className="nav-item text-end">                                                                                
                                        <label className="nav-link active link-danger fw-bold">Bem-vindo(a), {userName}</label>
                                    </li>                                                            
                                    <li className="nav-item flex-grow-1">
                                        <button
                                            className="btn btn-outline-danger me-2"
                                            id="navButton"
                                            type="button"
                                            onClick={handleLogout}
                                        >
                                            Sair
                                        </button>
                                    </li>                                                                        
                                </>
                            ) : (
                                <>
                                    {/* Resto dos itens do Navbar */}
                                    <li className="nav-item flex-grow-1">
                                        <Link to="/login">
                                            <button className="btn btn-outline-danger me-2" id="navButton" type="button">
                                                Entrar
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item flex-grow-1">
                                        <Link to="/register">
                                            <button className="btn btn-outline-danger" id="navButton" type="button">
                                                Registrar
                                            </button>
                                        </Link>
                                    </li>                                    
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
