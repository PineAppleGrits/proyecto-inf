import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then(() => history.push('/login')) // enviar a login despues de registrarse
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

// Set logged in user
export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// Login / get user's token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      // Set token into local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      // Set token into Authheader
      setAuthToken(token);

      // Decode the token to get user's data
      const decoded = jwtDecode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const getUserInfo = (localStorage, store) => {
  // Set auth token header auth
  const localToken = localStorage.jwtToken;
  axios.post('/api/users/', { token: localToken }).then(({ data }) => {
    const { token } = data;
    setAuthToken(token);
    const decoded = jwtDecode(token);
    store.dispatch(setCurrentUser(decoded));
  });
  // False = not expired token
  return false;
};

// User loading
export const setUserLoading = () => ({
  type: USER_LOADING,
});

// log out user
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');

  // Remove auth header for new requests
  setAuthToken(false);

  // Set current user to empty object so it will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const storedUser = (localStorage, store) => {
  // Set auth token header auth
  const localToken = localStorage.jwtToken;
  const oldDecoded = jwtDecode(localToken);
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (oldDecoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // True = expired token
    return true;
  }
  axios.post('/api/users/', { token: localToken }).then(({ data }) => {
    const { token } = data;
    setAuthToken(token);
    const decoded = jwtDecode(token);
    store.dispatch(setCurrentUser(decoded));
  });
  // False = not expired token
  return false;
};
