import React, { useState } from 'react';
import { register } from '../services/auth.services';
import '../styles/Register.css';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);

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
        setUserId(response.data.id);
      })
      .catch(error => {
        console.error('Erro ao criar usuário:', error);
      });
  }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de usuário</h2>

        <label>
          Nome:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Sobrenome:
          <input type="text" value={surname} onChange={(event) => setSurName(event.target.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>

      {userId && (
        <div className="success-message">
          <p>Usuário criado com sucesso!</p>
          <p>Código do usuário: {userId}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
