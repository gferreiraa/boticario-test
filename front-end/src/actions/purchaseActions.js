import { 
  ADD_PURCHASE, 
  ADD_PURCHASE_SUCESS,
  ADD_PURCHASE_ERROR,
  } from "../types/";

  import axiosClientPurchase from "../config/axiosFake"

// Adicionar novas compras
export function addNewPurchaseAction(purchase) {
  return  async (dispatch) => {
    dispatch(addPurchase());
    try {
      // Adiciona os dados a fake api
      await axiosClientPurchase.post('/purchases', purchase)
      dispatch(addPurchaseSucess(purchase))
    } catch (error) {
      console.log(error)
      dispatch(addPurchaseError(true))
    }
  }
}

const addPurchase = () => ({
  type: ADD_PURCHASE,
  payload: true
})

// Salvar produto
const addPurchaseSucess = purchase => (({
  type: ADD_PURCHASE_SUCESS,
  payload: purchase
}))

// Erro ao inserir produto
const addPurchaseError = error => ({
  type: ADD_PURCHASE_ERROR,
  payload: error
})