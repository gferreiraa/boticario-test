import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationContext from "../../context/Notifications/notificationContext";
import AuthContext from "../../context/Authentication/authContext";

import * as S from "./styled";
import  logoBoticario  from "../../assets/icons/logoBoticario.svg";

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

// {<S.LoginTitle>your Cashback</S.LoginTitle>

  return (
    <div className="body-app">
      <S.LayoutWrapper>
        <S.HCard>
          { notification ? (<div className={`alerta ${notification.category}`} >{ notification.message }</div>) : null }
          <S.logoBoticario>
            <img
              src={logoBoticario}
            />
          </S.logoBoticario>
            
            <form
              onSubmit={onSubmit}
            >
              <S.Label htmlFor="email">Email:</S.Label>
              <S.Input  
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Digite seu email"
                onChange={onChange}
              />
              <S.Label htmlFor="password">Senha:</S.Label>
              <S.Input 
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={onChange}
              />
              <S.LoginButton type="submit">Entrar</S.LoginButton>
            </form>
            <Link to={'/nova-conta'}>Criar nova conta</Link>
        
        </S.HCard>
        </S.LayoutWrapper>
      <S.Footer>* Consulte as regras para aplicação  do seu cashback.</S.Footer>
    </div>
  );
}

export default Login;