import {
  FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_ERROR
} from '../actions/user';

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, error: null, loading: true };
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, user: action.user, loading: false };
    case FETCH_CURRENT_USER_ERROR:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
}
