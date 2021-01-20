import {
  SUBMIT_CREDENTIALS,
  SUBMIT_CREDENTIALS_SUCCESS,
  SUBMIT_CREDENTIALS_ERROR,
  LOGGED_IN,
  LOGGED_OUT,
} from '../types';

const initialState = {
  loading: false,
  error: null,
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CREDENTIALS:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SUBMIT_CREDENTIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: null,
      };
    case SUBMIT_CREDENTIALS_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};
