import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationContext from "../../context/Notifications/notificationContext";
import AuthContext from "../../context/Authentication/authContext";

const Register = ({ history }) => {

  // Get context notification info
  const notificationContext = useContext(NotificationContext);
  const { notification, showNotification } = notificationContext;

  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;

  // Checks token exists and send to private area
  useEffect(() => {
    if(authenticated){
      history.push("/minhas-compras")
    }
    if(message) {
      showNotification(message.message, message.category)
    }
  }, [message, authenticated, history]);

  // Initial state to register
  const [ user, setUser  ] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    cpf: ''
  });

  // Get user info
  const { name, email, password, confirm, cpf } = user;
  
  // Catch the data entered by the user 
  const onChange = e => {
    setUser({
      ...user,
      [ e.target.name ]: e.target.value
    })
  }

  // Checks and sends data to register
  const onSubmit = e => {
    e.preventDefault();
    if(
      name.trim() === '' || 
      email.trim() === '' || 
      password.trim() === '' || 
      confirm.trim() === '' || 
      cpf.trim() === '' 
    ) {
      showNotification('Todos os campos são obrigatórios', 'alerta-error')
      return
    }
    if(password.length < 6) {
      showNotification('A senha deve ter no minimo 6 caracteres', 'alerta-error')
      return
    }
    if(password !== confirm) {
      showNotification('A senha deve ter no minimo 6 caracteres', 'alerta-error')
      return
    }
    if(cpf.length < 11) {
    showNotification('O número de digitos do CPF está incorrreto', 'alerta-error')
    return
    }

    registerUser({
      name,
      email,
      password,
      cpf
    });

  }

  return (
    <div>
      <h1>Cadastrar</h1>
      { notification ? (<div className={`alerta ${notification.category}`} >{ notification.message }</div>) : null }
      <form
        onSubmit={onSubmit}
      >
        <label htmlFor="name">Nome</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Digite seu nome"
          onChange={onChange}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Digite seu email"
          onChange={onChange}
        />
        <label htmlFor="password">Senha</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Digite seu password"
          onChange={onChange}
        />
        <label htmlFor="confirm">Confirmar Senha</label>
        <input 
          type="password"
          id="confirm"
          name="confirm"
          value={confirm}
          placeholder="Digite seu password"
          onChange={onChange}
        />
        <label htmlFor="cpf">CPF</label>
        <input 
          type="text"
          id="cpf"
          name="cpf"
          value={cpf}
          placeholder="Digite seu CPF"
          onChange={onChange}
        />
        <button type="submit">Criar nova conta</button>
      </form>
      <Link to={'/'}>Voltar</Link>
    </div>
  );
}

export default Register;