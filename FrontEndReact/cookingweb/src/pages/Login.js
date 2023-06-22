import React, {useState, useContext } from 'react';
import {authenticate} from '../services/auth.services';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'
import {UserContext} from './UserContext';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [messageLogin, setMessageLogin] = useState(null);

  const { setIsLoggedIn } = useContext(UserContext);  
  const { setUserName } = useContext(UserContext);

  const handleSubmit = async (event) => {    
    event.preventDefault();

    const logUser = {
      id: userId,            
      password: password,
      perfilAutorizado: ['Gerente', 'Atendente', 'Caixa', 'Cliente']      
    };

    await authenticate(logUser)
    .then(response => {    
      if (response && response.jwtToken) {
          setMessageLogin('Usuário logado!');
          setIsLoggedIn(true);
          setUserName(response.userName);
          navigate("/");
      } else {
          setMessageLogin('Erro na conexão.');
          setIsLoggedIn(false);
          setUserName('');
          return null;        
      }
    })
    .catch(error => {  
      setMessageLogin('Erro na conexão.');
      setIsLoggedIn(false);
      setUserName('');
      alert('Erro na conexão!');
    });

  };

  function doCancel() {
    navigate("/Catalogo"); 
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Identificador:
          <input type="userId" value={userId} onChange={(event) => setUserId(event.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button 
            className="btn btn-outline-danger" 
            type="submit">Entrar
        </button>
        <button
          type='cancel'
           onClick={doCancel} >
            Cancelar
        </button>
      </form>
      {messageLogin && (
        <div className="success-message">                    
          <p> Retorno: {messageLogin}</p>
        </div>
      )}      
    </div>
  );
}

export default Login;
