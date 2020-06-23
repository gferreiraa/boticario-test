import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Authentication/authContext';

import * as GS from "../../styles/styledGeneral";
import * as S from "./styled";

import { PurchaseItem } from "../../components"

// Redux
import  { useSelector, useDispatch } from "react-redux"
import { getPurchaseAction } from "../../actions/purchaseActions"

const Purchase = () => {
  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, logoutSession } = authContext;

  useEffect(() => {
    authenticatedUser();
  }, []);

  const dispatch = useDispatch()
  
  useEffect(()=> {
    // Get produtos
    const getPurchase = () => dispatch(getPurchaseAction())
    getPurchase()
  }, [])

  const purchaseList = useSelector( state => state.purchase.purchase)
  const error = useSelector(state =>state.purchase.error )
  const loading = useSelector(state => state.purchase.loading)

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
          { error ? <p>Deu ruim irmão, sorry</p> : null}
          <S.Empty>
            <p>Você ainda não possui compras cadastradas 😕</p>
            <p>Clique no botão abaixo para cadastrar novas compras e receber seu cashback.</p>
            <S.AddButton>
              <Link to={'/minhas-compras/nova-compra'}>Adicionar uma nova compra</Link>
            </S.AddButton>
            { loading ? <p>Carregando lista</p> : null}
            <p>tabela</p>
            <table>
               <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Data</th>
                        <th scope="col">Status </th>
                        <th scope="col">% de cashback </th>
                        <th scope="col">Ações  </th>
                    </tr>
               </thead>
               <tbody>

               { purchaseList.length === 0 ? 'Você ainda não possui compras cadastradas 😕' : (
                purchaseList.map(item => (
                       <PurchaseItem
                            key={item.id}
                            purchases={item}
                       />
                   ))
               ) }
           </tbody>

           </table>
          </S.Empty>
      </GS.Content>
      <GS.Footer>* Teste desenvolvido por <b>Getúlio Rafael Ferreira</b></GS.Footer>
    </GS.PageContainer>
  );
};

export default Purchase;

/* 
<h1>Purchase</h1>
{user ? <p>{user.name}</p> : null}
<Link to={'/minhas-compras/nova-compra'}>nova compra</Link> */