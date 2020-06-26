import React from 'react';
import { render } from '@testing-library/react';
import { PurchaseItem } from '../components';

import NotificationState from '../context/Notifications/notificationState';
import AuthState from '../context/Authentication/authState';
import { Provider } from 'react-redux';
import store from '../store/store';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

const purchaseInfo = {
  id: '',
  code: '', 
  price: '',
  data: '', 
  status: '',
  cashback: ''
}

describe('Login page', () => {
  it('Should be able to check Purchase Item Page', () => {
    const { debug } = render(
      <NotificationState>
        <AuthState>
          <Provider store={store}>
            <PurchaseItem purchases={purchaseInfo}/>
          </Provider>
        </AuthState>
      </NotificationState>
    );
    debug();
  });
});
