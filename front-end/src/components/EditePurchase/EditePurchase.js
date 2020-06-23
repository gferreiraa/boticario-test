import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/Authentication/authContext';

import * as GS from "../../styles/styledGeneral";

const EditPurchase = () => {
  // Get context authetication info
  const authContext = useContext(AuthContext);
  const { user, authenticatedUser, logoutSession } = authContext;

  useEffect(() => {
    authenticatedUser();
  }, []);

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
          Editar produto
        <form>
          <label>Código</label>
          <input
            name="code"
            type="number" 
            placeholder="Código do Produto"
          />
          <label>Preço</label>
          <input
            name="price"
            type="number" 
            placeholder="Código do Produto"
          />
          <label>Data da compra</label>
          <input
            name="data"
            type="date" 
            placeholder="Data"
          />
          <button
            type="submit"
          >
              Editar Compra
          </button>
        </form>
      </GS.Content>
      <GS.Footer>* Teste desenvolvido por <b>Getúlio Rafael Ferreira</b></GS.Footer>
    </GS.PageContainer>
  );
};

export default EditPurchase;
