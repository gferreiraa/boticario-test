import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationContext from '../../context/Notifications/notificationContext';
import AuthContext from '../../context/Authentication/authContext';

import * as S from './styled';
import logoBoticario from '../../assets/icons/logoBoticario.svg';

const Login = ({ history }) => {
  const notificationContext = useContext(NotificationContext);
  const { notification, showNotification } = notificationContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, sessionInit } = authContext;

  useEffect(() => {
    if (authenticated) {
      history.push('/minhas-compras');
    }
    if (message) {
      showNotification(message.message, message.category);
    }
    // eslint-disable-next-line
  }, [message, authenticated, history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      showNotification('Todos os campos são obrigatórios', 'alerta-error');
    }
    sessionInit({ email, password });
  };

  return (
    <S.PageContainer>
      <S.LayoutWrapper>
        <S.LoginCard>
          {notification ? (
            <div className={`alerta ${notification.category}`}>
              {notification.message}
            </div>
          ) : null}
          <S.Brand>
            <img src={logoBoticario} alt="Logo Boticário" />
          </S.Brand>
          <form onSubmit={onSubmit}>
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Digite seu email"
              onChange={handleChange}
            />
            <S.Label htmlFor="password">Senha:</S.Label>
            <S.Input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={handleChange}
            />
            <S.HomeButton type="submit">Entrar</S.HomeButton>
          </form>
          <S.LinkRoute>
            <Link to={'/nova-conta'}>Criar nova conta</Link>
          </S.LinkRoute>
        </S.LoginCard>
      </S.LayoutWrapper>
      <S.Footer>* Consulte as regras para aplicação do seu cashback.</S.Footer>
    </S.PageContainer>
  );
};

export default Login;
