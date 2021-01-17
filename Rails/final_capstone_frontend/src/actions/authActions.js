import axiosClient from '../config/axiosConfig';

import {
  SUBMIT_CREDENTIALS,
  SUBMIT_CREDENTIALS_SUCCESS,
  SUBMIT_CREDENTIALS_ERROR,
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

export default userData => async dispatch => {
  dispatch(submitCredentialsStart());
  try {
    await axiosClient.post('registrations', userData, {
      withCredentials: true,
    });
    dispatch(submitCredentialsSuccess());
  } catch (e) {
    dispatch(submitCredentialsError(e));
  }
};
