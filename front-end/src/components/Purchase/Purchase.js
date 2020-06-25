import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Authentication/authContext';
import { PurchaseItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getPurchaseAction } from '../../actions/purchaseActions';

import * as GS from '../../styles/styledGeneral';
import * as S from './styled';

const Purchase = () => {
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, logoutSession } = authContext;

  useEffect(() => {
    authenticatedUser();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPurchase = () => dispatch(getPurchaseAction());
    getPurchase();
    // eslint-disable-next-line
  }, []);

  const purchaseList = useSelector((state) => state.purchase.purchase);
  const error = useSelector((state) => state.purchase.error);

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
        {error ? <p>Deu ruim, tente rodar o json-server</p> : null}
        <S.Container>
          {purchaseList.length === 0 ? (
            <S.Subtitle>
              Você ainda não possui compras cadastradas{' '}
              <span role="img" aria-label="jsx-a11y/aria-proptypes">
                😕
              </span>
            </S.Subtitle>
          ) : (
            <S.Subtitle>
              Clique no botão abaixo para cadastrar novas compras e receber seu
              cashback.
            </S.Subtitle>
          )}
          <S.AddButton>
            <Link to={'/minhas-compras/nova-compra'}>
              Adicionar uma nova compra
            </Link>
          </S.AddButton>
          {purchaseList.length !== 0 ? (
            <S.Caption>Minhas Compras</S.Caption>
          ) : null}
          <table>
            {purchaseList.length !== 0 ? (
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Data</th>
                  <th scope="col">Status </th>
                  <th scope="col">% cashback </th>
                  <th scope="col">Ações </th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {purchaseList.length > 0 ? (
                purchaseList.map((item, i) => (
                  <PurchaseItem key={i} purchases={item} />
                ))
              ) : (
                <tr className="table-row__empty">
                  <td>0 Compras</td>
                </tr>
              )}
            </tbody>
          </table>
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

export default Purchase;
