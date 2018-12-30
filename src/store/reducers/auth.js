import {
  SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR,
  LOGOUT
} from '../actions/auth';

const initialState = {
  token: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, error: null, loading: true };
    case SIGNIN_SUCCESS:
      return { ...state, token: action.token, loading: false };
    case SIGNIN_ERROR:
      return { ...state, error: action.error.toString(), loading: false };
    case SIGNUP:
      return { ...state, error: null, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, token: action.token, loading: false };
    case SIGNUP_ERROR:
      return { ...state, error: action.error.toString(), loading: false };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}
