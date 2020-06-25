import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotificationContext from '../../context/Notifications/notificationContext';
import AuthContext from '../../context/Authentication/authContext';

import * as S from './styled';
import logoBoticario from '../../assets/icons/logoBoticario.svg';

const Register = ({ history }) => {
  const notificationContext = useContext(NotificationContext);
  const { notification, showNotification } = notificationContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;

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
    name: '',
    email: '',
    password: '',
    confirm: '',
    cpf: '',
  });

  const { name, email, password, confirm, cpf } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === '' ||
      cpf.trim() === ''
    ) {
      showNotification('Todos os campos são obrigatórios', 'alerta-error');
      return;
    }
    if (password.length < 6) {
      showNotification(
        'A senha deve ter no mínimo 6 caracteres',
        'alerta-error'
      );
      return;
    }
    if (password !== confirm) {
      showNotification('As senhas não conferem', 'alerta-error');
      return;
    }
    if (cpf.length < 11) {
      showNotification(
        'O número de digitos do CPF está incorrreto',
        'alerta-error'
      );
      return;
    }

    registerUser({
      name,
      email,
      password,
      cpf,
    });
  };

  return (
    <S.PageContainer>
      <S.LayoutWrapper>
        <S.RegisterCard>
          {notification ? (
            <div className={`alerta ${notification.category}`}>
              {notification.message}
            </div>
          ) : null}
          <S.Brand>
            <img src={logoBoticario} alt="Logo Boticário" />
          </S.Brand>
          <S.TitleCard>Realize aqui seu cadastro:</S.TitleCard>
          <form onSubmit={onSubmit}>
            <S.Label htmlFor="name">Nome:</S.Label>
            <S.Input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Digite seu nome"
              onChange={handleChange}
            />
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Digite seu email"
              onChange={handleChange}
            />
            <S.Label htmlFor="cpf">CPF:</S.Label>
            <S.Input
              maxLength="14"
              id="cpf"
              name="cpf"
              value={cpf}
              placeholder="Digite seu CPF"
              onChange={handleChange}
            />
            <S.Label htmlFor="password">Senha:</S.Label>
            <S.Input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Digite seu password"
              onChange={handleChange}
            />
            <S.Label htmlFor="confirm">Confirmar Senha:</S.Label>
            <S.Input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="Digite seu password"
              onChange={handleChange}
            />
            <S.HomeButton type="submit">Criar nova conta</S.HomeButton>
          </form>
          <S.LinkRoute>
            <Link to={'/'}>Voltar</Link>
          </S.LinkRoute>
        </S.RegisterCard>
      </S.LayoutWrapper>
      <S.Footer>* Consulte as regras para aplicação do seu cashback.</S.Footer>
    </S.PageContainer>
  );
};

export default Register;
