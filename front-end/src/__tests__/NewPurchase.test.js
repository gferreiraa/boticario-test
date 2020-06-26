import React from 'react';
import { render } from '@testing-library/react';
import { NewPurchase } from '../components';

import NotificationState from '../context/Notifications/notificationState';
import AuthState from '../context/Authentication/authState';
import { Provider } from 'react-redux';
import store from '../store/store';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Login page', () => {
  it('Should be able to check New Purchase Page', () => {
    const { debug } = render(
      <NotificationState>
        <AuthState>
          <Provider store={store}>
            <NewPurchase />
          </Provider>
        </AuthState>
      </NotificationState>
    );
    debug();
  });
});
