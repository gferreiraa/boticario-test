import { combineReducers } from "redux"
import purchaseReducer from "./purchaseReducer"

export default combineReducers({
  purchase: purchaseReducer
})