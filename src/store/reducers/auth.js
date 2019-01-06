import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR,
  LOGOUT
} from '../actions/auth';
import { getErrorMessage } from '../../helpers/request';

const initialState = {
  token: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, error: null, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, token: action.token, loading: false };
    case LOGIN_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case SIGNUP:
      return { ...state, error: null, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, token: action.token, loading: false };
    case SIGNUP_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}
