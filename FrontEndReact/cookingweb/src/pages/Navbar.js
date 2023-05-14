
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
        <header className="align-items-center justify-content-end">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/img/logoteste.png" alt="Logo" width="60" height="60"
                        className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto nav-fill mt-2 mb-2 mb-lg-0">
                        <li className="nav-item flex-grow-1" >
                            <a className="nav-link active link-danger fw-bold" aria-current="page"
                                href="index.html">início</a>
                        </li>
                        

                        <li className="nav-item flex-grow-1">
                            <Link
                                className="nav-link active link-danger fw-bold"
                                to="/vieworders"
                            > Meus Pedidos
                            </Link>
                        </li>

                        <li className="nav-item flex-grow-1">
                            <a className="icon-link me-2" href="/Carrinho">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" fill="currentColor"
                                    className="bi bi-cart2" viewBox="0 0 15 10">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89
                             4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61
                              3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                               1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2
                                1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg></a>
                        </li>


                        <div className="d-flex">
                            <div className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Procurar" aria-label="Search" hidden/>
                                <button className="btn btn-danger" type="submit" hidden>Buscar</button>
                            </div>
                            <Link to="/login">
                                <button className="btn btn-outline-danger me-2" id="navButton" type="button">
                                    Entrar
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn-outline-danger" id="navButton" type="button">
                                    Registrar
                                </button>
                            </Link>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>            
        </header>
        <div className="row">
        {/* <!-- LANCHES --> */}
        
        <div className="container row justify-content-center">
            <h2 className="text-center m-3">Lanches</h2>
            <div className="content col-3">
                {/* <img src="img/hamburguer1.png" alt="" className="img"> */}
                <h4>Belo Horizonte</h4>
                <p>R$ 22,90</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/hamburguer2.png" alt="" className="img"> */}
                <h4>Rio de Janeiro</h4>
                <p>R$ 22,90</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/hamburguer3.png" alt="" className="img"> */}
                <h4>São Paulo</h4>
                <p>R$ 24,90</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/hamburguer4.png" alt="" className="img"> */}
                <h4>Recife</h4>
                <p>R$ 20,90</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/hamburguer5.png" alt="" className="img"> */}
                <h4>Salvador</h4>
                <p>R$ 24,90</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
        


        {/* <!-- ACOMPANHAMENTOS --> */}

       
        
            <h2 className="text-center m-3">Acompanhamentos</h2>
            <div className="content col">
                {/* <img src="img/acompanhamento1.png" alt="" className="img"> */}
                <h4>Batata Pequena</h4>
                <p>R$ 3,99</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/acompanhamento2.png" alt="" className="img"> */}
                <h4>Batata Média</h4>
                <p>R$ 6,50</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/acompanhamento3.png" alt="" className="img"> */}
                <h4>Batata Grande</h4>
                <p>R$ 8,50</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/acompanhamento4.png" alt="" className="img"> */}
                <h4>Anéis de Cebola</h4>
                <p>R$ 8,50</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
        


        {/* <!-- BEBIDAS --> */}

        
            <h2 className="text-center m-3">Bebidas</h2>
            <div className="content col">
                {/* <img src="img/Bebida1.png" alt="" className="img"> */}
                <h4>Coca Cola</h4>
                <p>R$ 6,00</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/Bebida2.png" alt="" className="img"> */}
                <h4>Suco natural - Laranja</h4>
                <p>R$ 3,99</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/Bebida3.png" alt="" className="img"> */}
                <h4>Cerveja Artesanal</h4>
                <p>R$ 12,00</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            <div className="content col-3">
                {/* <img src="img/Bebida4.png" alt="" className="img"> */}
                <h4>Coca Cola zero</h4>
                <p>R$ 5,50</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos cum vel illum minima
                    excepturi.</p>
                <button className="btn btn-danger m-1" type="button">Adicionar</button>
            </div>
            </div>
        

    </div>
</>
    )
    
}    

export default Navbar;