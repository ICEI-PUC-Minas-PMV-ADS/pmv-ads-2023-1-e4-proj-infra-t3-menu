import React, { useState, useEffect } from 'react';
import { register } from '../services/auth.services';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null)
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      perfil: 1
    };
    register(newUser)
      .then(response => {                       
        setError(null);
        setUserId(response.data.id);
        alert('Código do usuário criado: ' + response.data.id);
        navigate("/Login");        
      })
      .catch(error => {        
        setError({ message: 'Ocorreu um erro ao criar o usuário.' });
      });
  }

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  function doCancel() {
    navigate("/Catalogo"); 
  }

  return (    
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Registre-se gratuitamente</h2>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome"/>
          <input type="text" value={surname} onChange={(event) => setSurName(event.target.value)} placeholder="Sobrenome" />
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="e-mail"/>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="senha" />       
        <button type="submit">Cadastrar</button>
        <button
           onClick={doCancel} >
            Cancelar
        </button>
      </form>

      {userId && (
        <div className="success-message">          
          <p style={{ color: 'white' }}>Usuário criado com sucesso!</p>
          <p style={{ color: 'white' }}>Código do usuário: {userId}</p>
        </div>
      )}
      {error && (
        <div className="error-message">
          <p>Ocorreu um erro ao criar o usuário: {error.message}</p>
        </div>
      )}

    </div>    
  );
}

export default Register;
