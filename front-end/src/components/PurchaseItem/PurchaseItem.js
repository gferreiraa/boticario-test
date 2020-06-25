import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deletePurchaseAction } from '../../actions/purchaseActions';

import * as S from './styled';

const PurchaseItem = ({ purchases }) => {
  const { id, code, price, data, status, cashback } = purchases;

  const dispatch = useDispatch();
  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Deseja excluir?',
      text: 'Tem certeza que deseja excluir este item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(109,211,109)',
      cancelButtonColor: 'rgb(242,116,116)',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(deletePurchaseAction(id));
      }
    });
  };

  return (
    <tr>
      <td data-label="Código">{code}</td>
      <td data-label="Valor">{price}</td>
      <td data-label="Data">{data}</td>
      <td data-label="Status">{status}</td>
      <td data-label="% de cashback">{cashback}</td>
      <td data-label="Ações">
        <S.DeleteButton type="button" onClick={() => confirmDelete(id)}>
          Excluir
        </S.DeleteButton>
      </td>
    </tr>
  );
};

export default PurchaseItem;
