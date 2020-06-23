import React from 'react';
import { Link } from 'react-router-dom';


const PurchaseItem = ({purchases}) => {
  console.log("item", purchases)
  const {code, price, data, status, cashback} = purchases
  return (
    <tr>
      <td>{code}</td>
      <td>{price}</td>
      <td>{data}</td>
      <td>{status}</td>
      <td>{cashback}</td>
      <td>
        <Link to={`/minhas-compras/nova-compra`}>
          Editar
        </Link>
        <button type="button">
          Remover
        </button>
      </td>
    </tr>
  )
}

export default PurchaseItem;
