import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from  "../../types";

export default (state, action) => {
  switch(action.type) {
    case SHOW_NOTIFICATION:
      return {
        notification: action.payload
      }
    case HIDE_NOTIFICATION: 
      return {
        notification: null
      }
    default: 
      return state;
  }
}