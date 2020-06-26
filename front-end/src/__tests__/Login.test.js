import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '../components';

import NotificationState from '../context/Notifications/notificationState';
import AuthState from '../context/Authentication/authState';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Login page', () => {
  it('Should be able to login', () => {
    const { debug } = render(
      <NotificationState>
        <AuthState>
          <Login />
        </AuthState>
      </NotificationState>
    );
    debug();
  });
});
