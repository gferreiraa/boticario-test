import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Login,
  Register,
  Purchase,
  PrivateRoute,
  NewPurchase,
} from './components';

import NotificationState from './context/Notifications/notificationState';
import AuthState from './context/Authentication/authState';
import authToken from './config/authToken';

import GlobalStyles from './styles/global';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Provider } from 'react-redux';
import store from './store/store';

const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

function App() {
  return (
    <NotificationState>
      <AuthState>
        <Router>
          <Provider store={store}>
            <GlobalStyles />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Login} />
                      <Route exact path="/nova-conta" component={Register} />
                      <PrivateRoute
                        exact
                        path="/minhas-compras"
                        component={Purchase}
                      />
                      <PrivateRoute
                        exact
                        path="/minhas-compras/nova-compra"
                        component={NewPurchase}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Provider>
        </Router>
      </AuthState>
    </NotificationState>
  );
}

export default App;
