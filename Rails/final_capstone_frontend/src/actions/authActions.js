import axiosClient from '../config/axiosConfig';

import {
  SUBMIT_CREDENTIALS,
  SUBMIT_CREDENTIALS_SUCCESS,
  SUBMIT_CREDENTIALS_ERROR,
  LOGGED_IN,
  LOGGED_OUT,
} from '../types';

const submitCredentialsStart = () => ({
  type: SUBMIT_CREDENTIALS,
  payload: true,
});

const submitCredentialsSuccess = () => ({
  type: SUBMIT_CREDENTIALS_SUCCESS,
});

const submitCredentialsError = error => ({
  type: SUBMIT_CREDENTIALS_ERROR,
  payload: error,
});

const submitLogin = () => ({
  type: LOGGED_IN,
  payload: true,
});

const submitLogout = () => ({
  type: LOGGED_OUT,
  payload: false,
});

export default userData => async dispatch => {
  dispatch(submitCredentialsStart());
  try {
    const response = await axiosClient.post('registrations', userData, {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch(submitCredentialsSuccess());
      dispatch(submitLogin());
    }
  } catch (e) {
    dispatch(submitCredentialsError(e));
    dispatch(submitLogout());
  }
};
