import React from 'react';
import { render } from '@testing-library/react';
import { Register } from '../components';

import NotificationState from '../context/Notifications/notificationState';
import AuthState from '../context/Authentication/authState';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Register page', () => {
  it('Should be able to render the Register page', () => {
    const { debug } = render(
      <NotificationState>
        <AuthState>
          <Register />
        </AuthState>
      </NotificationState>
    );
    debug();
  });
});
