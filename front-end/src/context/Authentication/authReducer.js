import { 
  REGISTER_SUCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT
} from  "../../types";

export default (state, action) => {
  switch(action.type) {
    case REGISTER_SUCESS:
      case LOGIN_SUCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false
      }
      case LOGIN_ERROR:
      case LOGOUT:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}