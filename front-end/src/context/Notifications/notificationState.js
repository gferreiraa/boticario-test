import React, { useReducer } from 'react';
import notificationReducer from './notificationReducer';
import notificationContext from './notificationContext';

import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../../types';

const NotificationState = ({ children }) => {
  const initialState = {
    notification: null,
  };

  const [state, dispatch] = useReducer(notificationReducer, initialState);

  // Show notifications
  const showNotification = (message, category) => {
    dispatch({
      type: SHOW_NOTIFICATION,
      payload: {
        message,
        category,
      },
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_NOTIFICATION,
      });
    }, 3000);
  };

  return (
    <notificationContext.Provider
      value={{
        notification: state.notification,
        showNotification,
      }}
    >
      {children}
    </notificationContext.Provider>
  );
};

export default NotificationState;
