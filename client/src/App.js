import React, { useState, useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch, useLocation, withRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { storedUser, getUserInfo, setCurrentUser } from './actions/authActions';
import store from './store';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Channel from './components/conversations/Channel';
import Server from './components/conversations/Server';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-languages-select/css/react-languages-select.css';
import LoadingScreen from './components/util/LoadingScreen';

// If user in localstorage, check session to see if it's expired.

const App = function ({ history }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (localStorage.jwtToken) {
      getUserInfo(localStorage, store);
    }
  }, [history.location.pathname]);
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense delayMs={1500} fallback={<LoadingScreen />}>
          <div className="sticky-alerts" />

          <div className="content-wrapper">
            <Route
              exact
              path="/"
              userData={userData}
              setUserData={setUserData}
              data={this}
              component={Landing}
            />
            <Suspense delayMs={1500} fallback={<LoadingScreen />}>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Suspense>
            <Switch>
              <PrivateRoute exact path="/@me/" component={Dashboard} />
              {/* <PrivateRoute
                  exact
                  userData={userData}
                  setUserData={setUserData}
                  path="/channel/:channelId"
                  component={Channel}
                /> */}
              <PrivateRoute
                exact
                userData={userData}
                setUserData={setUserData}
                path="/channel/:serverId/:channelId?"
                component={Server}
              />
            </Switch>
          </div>
        </Suspense>
      </div>
    </Provider>
  );
};

export default withRouter(App);
