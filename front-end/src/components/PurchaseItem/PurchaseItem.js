import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remover',
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
      <td>{code}</td>
      <td>{price}</td>
      <td>{data}</td>
      <td>{status}</td>
      <td>{cashback}</td>
      <td>
        <button type="button" onClick={()=>confirmDelete(id)}>
          Excluir
        </button>
      </td>
    </tr>
  )
}

export default PurchaseItem;
