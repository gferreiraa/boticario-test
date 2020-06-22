import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import { Login, Register, Purchase, PrivateRoute } from "./components";
import NotificationState from "./context/Notifications/notificationState";
import AuthState from "./context/Authentication/authState";
import authToken from "./config/authToken";

import GlobalStyles from "./styles/global";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const token = localStorage.getItem('token');
if(token) {
  authToken(token)
}

function App() {
  return (
    <NotificationState>
      <AuthState>
        <Router>
          <GlobalStyles/>
            <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Login} />
                  <Route  path="/nova-conta" component={Register} />
                  <PrivateRoute  path="/minhas-compras" component={Purchase} />
                </Switch> 
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </AuthState>
    </NotificationState>
  );
}

export default App;
