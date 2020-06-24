import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux" 
import AuthContext from '../../context/Authentication/authContext';

import { Link } from 'react-router-dom';

import * as GS from "../../styles/styledGeneral";
import * as S from "./styled";

import IntlCurrencyInput from "react-intl-currency-input"
import moment from 'moment'; 

// actions
import { addNewPurchaseAction } from "../../actions/purchaseActions"


const NewPurchase = ({ history }) => {
  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, logoutSession } = authContext;

  useEffect(() => {
    authenticatedUser();
  }, []);

  // estado local do componente 
  const [code, setCode] = useState();
  const [price, setPrice] = useState();
  const [data, setData] = useState('');


  // utilizar useDispatch
  const dispatch = useDispatch()

  //Loading
  const loading = useSelector(state => state.purchase.loading)
  console.log(loading);
  const errorLoading = useSelector(state => state.purchase.error)

  // Chama a ação de purchase action
  const addNewPurchase = purchase => dispatch(addNewPurchaseAction(purchase))

  // Quando o usário da submit
  const sendNewPurchase = e => {
    e.preventDefault();
    
    console.log("price", price)
    // Validar formulário
    if(code.trim() === '' || price <= 0) {
      return 
    }
    const test = Number(price)
    const va = test.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    // Verifica se existem erros

    // Criar novo produto
    addNewPurchase({
      code,
      price:va,
      data: moment(data).format("DD/MM/yyyy"),
      status: "Em validação",
      cashback: `${Math.floor(Math.random() * 100)}%`
    })

    // Redirecionar
    history.push('/minhas-compras')
  }

/*   const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  }; */

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
          <S.HCard>
            <S.Subtitle>Preencha o formulário abaixo para cadastrar novas compras e receber seu cashback.</S.Subtitle>
            <S.Form onSubmit={sendNewPurchase}>
              <S.Label>Código:</S.Label>
              <S.Input
                name="code"
                type="string" 
                placeholder="Código do Produto"
                value={code}
                required
                onChange={e => setCode(e.target.value)}
              />
              <S.Label>Preço:</S.Label>
              <S.Input
                name="price"
                type="string"
                placeholder="Valor da Compra"
                value={price}
                required
                onChange={e => setPrice(e.target.value)} />
              <S.Label>Data da compra:</S.Label>
              <S.Input
                name="data"
                type="date" 
                placeholder="Data"
                value={data}
                required
                onChange={e => setData(e.target.value)}
              />
              <S.AddPurchase
                type="submit"
              > Cadastrar Compra
              </S.AddPurchase>
              <Link to={'/minhas-compras'}>
                <S.BackButton>
                  Voltar
                  </S.BackButton>
              </Link>
            </S.Form>
            {loading ? <p>Loading</p> : null}
            {errorLoading ? <p>DEU RUIM</p> : null}
          
          </S.HCard>
      </S.Container>
      </GS.Content>
      <GS.Footer>
      * Teste desenvolvido por <a target="_blank" href="https://gferreiraa.github.io/">Getúlio Rafael Ferreira</a>
    </GS.Footer>
    </GS.PageContainer>
  );
};

export default NewPurchase;
