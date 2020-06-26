import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axiosClient from '../../config/axios';
import authToken from '../../config/authToken';

import {
  REGISTER_SUCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../../types';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (info) => {
    try {
      const responseUser = await axiosClient.post('/api/users', info);
      dispatch({
        type: REGISTER_SUCESS,
        payload: responseUser.data,
      });

      authenticatedUser();
    } catch (error) {
      console.log(error.response.data.message);
      const notification = {
        message: error.response.data.message,
        category: 'alerta-error',
      };
      dispatch({
        type: REGISTER_ERROR,
        payload: notification,
      });
    }
  };

  const authenticatedUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      authToken(token);
    }

    try {
      const authUser = await axiosClient.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: authUser.data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const sessionInit = async (info) => {
    try {
      const loginUser = await axiosClient.post('/api/auth', info);
      dispatch({
        type: LOGIN_SUCESS,
        payload: loginUser.data,
      });
      authenticatedUser();
    } catch (error) {
      console.log(error.response.data.message);
      const notification = {
        message: error.response.data.message,
        category: 'alerta-error',
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: notification,
      });
    }
  };

  const logoutSession = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        sessionInit,
        authenticatedUser,
        logoutSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
