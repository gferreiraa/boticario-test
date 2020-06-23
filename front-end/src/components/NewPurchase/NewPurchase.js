import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux" 
import AuthContext from '../../context/Authentication/authContext';

import * as GS from "../../styles/styledGeneral";

import IntlCurrencyInput from "react-intl-currency-input"

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
  const [code, setCode] = useState(0);
  const [price, setPrice] = useState(0);
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
    
    // Validar formulário
    if(code <=0 || price <= 0 || data.trim === '') {
      return 
    }

    // Verifica se existem erros

    // Criar novo produto
    addNewPurchase({
      code,
      price,
      data,
      status: "em aprovação",
      cashback: "10%"
    })

    // Redirecionar
    history.push('/minhas-compras')
  }

  const currencyConfig = {
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
        <form onSubmit={sendNewPurchase}>
          <label>Código</label>
          <input
            name="code"
            type="number" 
            placeholder="Código do Produto"
            value={code}
            onChange={e => setCode(Number(e.target.value))}
          />
          <label>Preço</label>
          <IntlCurrencyInput
            name="price"
            placeholder="Código do Produto"
            value={price}
            currency="BRL" 
            config={currencyConfig}
            onChange={e => setPrice(e.target.value)} />
          <label>Data da compra</label>
          <input
            name="data"
            type="date" 
            placeholder="Data"
            value={data}
            onChange={e => setData(e.target.value)}
          />
          <button
            type="submit"
          >
              Cadastrar Compra
          </button>
        </form>
        {loading ? <p>Loading</p> : null}
        {errorLoading ? <p>DEU RUIM</p> : null}
      </GS.Content>
      <GS.Footer>* Teste desenvolvido por <b>Getúlio Rafael Ferreira</b></GS.Footer>
    </GS.PageContainer>
  );
};

export default NewPurchase;
