import React, {useState} from 'react';
import {authenticate} from '../services/auth.services';
import '../styles/Login.css';

// Pendência: armazenar o token obtido na ação de login

const Login = () => {
  //const { setSigned, setName, setToken } = useUser();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');  
  const [messageLogin, setMessageLogin] = useState(null);

  const handleSubmit = async (event) => {    
    event.preventDefault();

    const logUser = {
      id: id,            
      password: password      
    };

    const dados = await authenticate(logUser)
    .then(response => { 
      console.log('response: ');
      console.log(response);
      setMessageLogin('Usuário logado!');      
    })
    .catch(error => {        
      setMessageLogin({ message: 'Ocorreu um erro ao conectar.' });
    });

    //console.log(dados);    
    //setSigned(true);
    //setName(dados.name);
    //setToken(dados.jwtToken);
    //console.log(dados.jwtToken);    
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
      {messageLogin && (
        <div className="success-message">                    
          <p>Retorno: {messageLogin}</p>
        </div>
      )}      
    </div>
  );
}

export default Login;
