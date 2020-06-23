// Cada reducer tem seu próprio state
import { 
  ADD_PURCHASE, 
  ADD_PURCHASE_SUCESS,
  ADD_PURCHASE_ERROR,
  GET_PURCHASE,
  GET_PURCHASE_SUCESS,
  GET_PURCHASE_ERROR,
  DELETE_PURCHASE,
  DELETE_PURCHASE_SUCESS,
  DELETE_PURCHASE_ERROR
} from "../types/";

const initialState = {
  purchase: [],
  error: null,
  loading:  false,
  deletePurchase: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PURCHASE:
    case ADD_PURCHASE:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_PURCHASE_SUCESS:
      return {
        ...state,
        loading: false,
        purchase:[...state.purchase, action.payload]
      }
    case ADD_PURCHASE_ERROR:
    case GET_PURCHASE_ERROR:
    case DELETE_PURCHASE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_PURCHASE_SUCESS:
      return {
        ...state,
        loading: false,
        error: null, 
        purchase: action.payload
      }
    case DELETE_PURCHASE:
      return {
        ...state,
        deletePurchase: action.payload
      }
    case DELETE_PURCHASE_SUCESS: 
      return {
        ...state,
        purchase: state.purchase.filter( purchase => purchase.id !== state.deletePurchase),
        deletePurchase: null
      }
    default:
      return state; 
  }
}