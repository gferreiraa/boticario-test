import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../context/Authentication/authContext';

import { Link } from 'react-router-dom';
import { addNewPurchaseAction } from '../../actions/purchaseActions';

import * as GS from '../../styles/styledGeneral';
import * as S from './styled';

import moment from 'moment';

const NewPurchase = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, logoutSession } = authContext;

  useEffect(() => {
    authenticatedUser();
    // eslint-disable-next-line
  }, []);

  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.purchase.loading);
  const errorLoading = useSelector((state) => state.purchase.error);

  const addNewPurchase = (purchase) => dispatch(addNewPurchaseAction(purchase));

  const sendNewPurchase = (e) => {
    e.preventDefault();

    if (code.trim() === '' || price <= 0) {
      return;
    }
    const test = Number(price);
    const va = test.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    addNewPurchase({
      code,
      price: va,
      data: moment(data).format('DD/MM/yyyy'),
      status: 'Em validação',
      cashback: `${Math.floor(Math.random() * 100)}%`,
    });
    history.push('/minhas-compras');
  };

  return (
    <GS.PageContainer>
      <GS.Header>
        <p>Seja Bem-vindo(a), {user ? <span>{user.name}</span> : null} </p>
        <GS.LogoutButton
          onClick={() => {
            logoutSession();
          }}
        >
          Sair
        </GS.LogoutButton>
      </GS.Header>
      <GS.Content>
        <S.Container>
          <S.PurchaseCard>
            <S.Subtitle>
              Preencha o formulário abaixo para cadastrar novas compras e
              receber seu cashback.
            </S.Subtitle>
            <S.Form onSubmit={sendNewPurchase}>
              <S.Label>Código:</S.Label>
              <S.Input
                name="code"
                type="string"
                placeholder="Código do Produto"
                value={code}
                required
                onChange={(e) => setCode(e.target.value)}
              />
              <S.Label>Preço:</S.Label>
              <S.Input
                name="price"
                type="number"
                placeholder="Valor da Compra"
                value={price}
                required
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <S.Label>Data da compra:</S.Label>
              <S.Input
                name="data"
                type="date"
                placeholder="Data"
                value={data}
                required
                onChange={(e) => setData(e.target.value)}
              />
              <S.AddPurchase type="submit"> Cadastrar Compra</S.AddPurchase>
              <Link to={'/minhas-compras'}>
                <S.BackButton>Voltar</S.BackButton>
              </Link>
            </S.Form>
            {loading ? <p>Loading</p> : null}
            {errorLoading ? <p>DEU RUIM</p> : null}
          </S.PurchaseCard>
        </S.Container>
      </GS.Content>
      <GS.Footer>
        * Teste desenvolvido por{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gferreiraa.github.io/"
        >
          Getúlio Rafael Ferreira
        </a>
      </GS.Footer>
    </GS.PageContainer>
  );
};

export default NewPurchase;
