import React, {useState} from 'react';
import {login} from '../services/auth.services';
import '../styles/Login.css';

// Pendência: armazenar o token obtido na ação de login

const Login = () => {
  //const { setSigned, setName, setToken } = useUser();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');  

  const handleSubmit = async (event) => {    
    event.preventDefault();
    const dados = await login({ id, password });
    console.log(dados);    
    //setSigned(true);
    //setName(dados.name);
    //setToken(dados.jwtToken);
    console.log(dados.jwtToken);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Identificador:
          <input type="id" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
