import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import * as S from './styled';

// redux
import { useDispatch } from "react-redux"
import {deletePurchaseAction} from "../../actions/purchaseActions"  

const PurchaseItem = ({purchases}) => {
  console.log("item", purchases)
  const {id, code, price, data, status, cashback} = purchases
  
  const dispatch = useDispatch()
  //confirm delete
  const confirmDelete = id => {
    // confirm message
    Swal.fire({
      title: 'Deseja excluir?',
      text: "Tem certeza que deseja excluir este item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(109,211,109)',
      cancelButtonColor: 'rgb(242,116,116)',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.value) {
          // pasarlo al action
          dispatch(deletePurchaseAction(id))
      }
  });

    // action
  }
  return (
    <tr>
      <td data-label="Código">{code}</td>
      <td data-label="Valor">{price}</td>
      <td data-label="Data">{data}</td>
      <td data-label="Status">{status}</td>
      <td data-label="% de cashback">{cashback}</td>
      <td data-label="Ações">
        <S.DeleteButton type="button" onClick={()=>confirmDelete(id)}>
          Excluir
        </S.DeleteButton>
      </td>
    </tr>
  )
}

export default PurchaseItem;
