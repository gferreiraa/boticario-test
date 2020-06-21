import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationContext from "../../context/Notifications/notificationContext";
import AuthContext from "../../context/Authentication/authContext";

const Login = ({ history }) => {

  // Get context notification info
  const notificationContext = useContext(NotificationContext);
  const { notification, showNotification } = notificationContext;

  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { message, authenticated, sessionInit } = authContext;

  // Checks user data and send to private area
  useEffect(() => {
    if(authenticated){
      history.push("/minhas-compras")
    }
    if(message) {
      showNotification(message.message, message.category)
    }
  }, [message, authenticated, history]);

  // Initial state to login
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  });

  // Get user info
  const { email, password } = user;
  
  // Catch the data entered by the user 
  const onChange = e => {
    setUser({
      ...user,
      [ e.target.name ]: e.target.value
    })
  }

  // Checks and sends data to login
  const onSubmit = e => {
    e.preventDefault();
    if(email.trim() === "" || password.trim() === "") {
      showNotification("Todos os campos são obrigatórios", "alerta-error")
    }
    sessionInit({ email, password });
  }

  return (
    <div>
    { notification ? (<div className={`alerta ${notification.category}`} >{ notification.message }</div>) : null }
      <h1>Entrar</h1>
      <form
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Digite seu email"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Digite seu password"
          onChange={onChange}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to={'/nova-conta'}>Criar nova conta</Link>
    </div>
  );
}

export default Login;