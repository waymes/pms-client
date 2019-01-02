export const FETCH_CURRENT_USER = 'USER/FETCH_CURRENT_USER';
export const FETCH_CURRENT_USER_SUCCESS = 'USER/FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_ERROR = 'USER/FETCH_CURRENT_USER_ERROR';

// fetchCurrentUser ==============================================
export const fetchCurrentUserAction = () => ({
  type: FETCH_CURRENT_USER
});
export const fetchCurrentUserSuccessAction = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user
});
export const fetchCurrentUserErrorAction = error => ({
  type: FETCH_CURRENT_USER_ERROR,
  error
});