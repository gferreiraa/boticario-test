import { 
  ADD_PURCHASE, 
  ADD_PURCHASE_SUCESS,
  ADD_PURCHASE_ERROR,
  GET_PURCHASE,
  GET_PURCHASE_SUCESS,
  GET_PURCHASE_ERROR
  } from "../types/";

  import axiosClientPurchase from "../config/axiosFake"
  import Swal from "sweetalert2";

// Adicionar novas compras
export function addNewPurchaseAction(purchase) {
  return  async (dispatch) => {
    dispatch(addPurchase());
    try {
      // Adiciona os dados a fake api
      await axiosClientPurchase.post('/purchases', purchase)
      dispatch(addPurchaseSucess(purchase))
      // Sweet alert
      Swal.fire(
        'Parabéns',
        'Sua nova compra foi cadastrada com sucesso!',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(addPurchaseError(true))
      Swal.fire({
        icon: 'error',
        title: 'Desculpe',
        text: 'Ocorreu um erro inesperado.'
      })
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
});

// Função para get de novos produtos
export function getPurchaseAction(){
  return async (dispatch) => {
    dispatch(getPurchase())

    try {
      const res = await axiosClientPurchase.get('/purchases')
      dispatch(getPurchaseSucess(res.data))
    } catch (error) {
      console.log(error)
      dispatch(getPurchaseError())
    }
  }
}

const getPurchase = () => ({
  type: GET_PURCHASE,
  payload: true
})

const getPurchaseSucess = purchases => ({
  type: GET_PURCHASE_SUCESS,
  payload: purchases
})

const getPurchaseError = () => ({
  type: GET_PURCHASE_ERROR,
  payload: true
})