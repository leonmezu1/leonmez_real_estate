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

export default (userData, path) => async dispatch => {
  dispatch(submitCredentialsStart());
  try {
    const response = await axiosClient.post(path, userData);

    localStorage.setItem('capstone_api', response.data.jwt);
    dispatch(submitCredentialsSuccess());
    dispatch(submitLogin());
  } catch (e) {
    dispatch(submitCredentialsError(e));
    dispatch(submitLogout());
  }
};

export const loginStatus = status => dispatch => {
  // eslint-disable-next-line semi
  // eslint-disable-next-line no-unused-expressions
  status ? dispatch(submitLogin()) : dispatch(submitLogout());
};
