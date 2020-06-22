import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, Register, Purchase, PrivateRoute } from "./components";
import NotificationState from "./context/Notifications/notificationState";
import AuthState from "./context/Authentication/authState";
import authToken from "./config/authToken";

import GlobalStyles from "./styles/global";

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
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nova-conta" component={Register} />
            <PrivateRoute exact path="/minhas-compras" component={Purchase} />
          </Switch>
        </Router>
      </AuthState>
    </NotificationState>
  );
}

export default App;
