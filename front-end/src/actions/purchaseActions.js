import {
  ADD_PURCHASE,
  ADD_PURCHASE_SUCESS,
  ADD_PURCHASE_ERROR,
  GET_PURCHASE,
  GET_PURCHASE_SUCESS,
  GET_PURCHASE_ERROR,
  DELETE_PURCHASE,
  DELETE_PURCHASE_SUCESS,
  DELETE_PURCHASE_ERROR,
} from '../types/';

import axiosClientPurchase from '../config/axiosFake';
import Swal from 'sweetalert2';

export function addNewPurchaseAction(purchase) {
  return async (dispatch) => {
    dispatch(addPurchase());
    try {
      await axiosClientPurchase.post('/purchases', purchase);
      dispatch(addPurchaseSucess(purchase));
      // Sweet alert
      Swal.fire(
        'Parabéns',
        'Sua nova compra foi cadastrada com sucesso!',
        'success'
      );
    } catch (error) {
      console.log(error);
      dispatch(addPurchaseError(true));
      Swal.fire({
        icon: 'error',
        title: 'Desculpe',
        text: 'Ocorreu um erro inesperado.',
      });
    }
  };
}

const addPurchase = () => ({
  type: ADD_PURCHASE,
  payload: true,
});

const addPurchaseSucess = (purchase) => ({
  type: ADD_PURCHASE_SUCESS,
  payload: purchase,
});

const addPurchaseError = (error) => ({
  type: ADD_PURCHASE_ERROR,
  payload: error,
});

export function getPurchaseAction() {
  return async (dispatch) => {
    dispatch(getPurchase());

    try {
      const res = await axiosClientPurchase.get('/purchases');
      dispatch(getPurchaseSucess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getPurchaseError());
    }
  };
}

const getPurchase = () => ({
  type: GET_PURCHASE,
  payload: true,
});

const getPurchaseSucess = (purchases) => ({
  type: GET_PURCHASE_SUCESS,
  payload: purchases,
});

const getPurchaseError = () => ({
  type: GET_PURCHASE_ERROR,
  payload: true,
});

export function deletePurchaseAction(id) {
  return async (dispatch) => {
    dispatch(deletePurchase(id));
    try {
      await axiosClientPurchase.delete(`/purchases/${id}`);
      dispatch(deletePurchaseSucess());
      Swal.fire(
        'Compra excluída',
        'Sua compra foi excluída com sucesso!',
        'success'
      );
    } catch (error) {
      dispatch(deletePurchaseError());
    }
  };
}

const deletePurchase = (id) => ({
  type: DELETE_PURCHASE,
  payload: id,
});

const deletePurchaseSucess = () => ({
  type: DELETE_PURCHASE_SUCESS,
});

const deletePurchaseError = () => ({
  type: DELETE_PURCHASE_ERROR,
  payload: true,
});
