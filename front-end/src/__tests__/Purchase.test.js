import React from 'react';
import { render } from '@testing-library/react';
import { Purchase } from '../components';

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
  it('Should be able to render the Purchase page', () => {
    const { debug } = render(
      <NotificationState>
        <AuthState>
          <Provider store={store}>
            <Purchase />
          </Provider>
        </AuthState>
      </NotificationState>
    );
    debug();
  });
});
