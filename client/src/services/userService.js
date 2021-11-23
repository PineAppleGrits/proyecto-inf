import axios from 'axios';

export const editUser = (userData) => (dispatch) => {
  axios
    .put('/api/users/', userData)
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};
