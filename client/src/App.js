import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storedUser } from './actions/authActions';
import store from './store';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Channel from './components/conversations/Channel';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-languages-select/css/react-languages-select.css';
import LoadingScreen from './components/util/LoadingScreen';
// If user in localstorage, check session to see if it's expired.
if (localStorage.jwtToken) {
  if (storedUser(localStorage, store)) {
    window.location.href = './login';
  }
}

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <Provider store={store}>
      <Router>
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
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  userData={userData}
                  setUserData={setUserData}
                  path="/channel/:channelId"
                  component={Channel}
                />
              </Switch>
            </div>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
