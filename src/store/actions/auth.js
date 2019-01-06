export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR';

export const SIGNUP = 'AUTH/SIGNUP';
export const SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'AUTH/SIGNUP_ERROR';

export const LOGOUT = 'AUTH/LOGOUT';

// login ==============================================
export const loginAction = payload => ({
  type: LOGIN,
  payload
});
export const loginSuccessAction = token => ({
  type: LOGIN_SUCCESS,
  token
});
export const loginErrorAction = error => ({
  type: LOGIN_ERROR,
  error
});

// signup ==============================================
export const signupAction = payload => ({
  type: SIGNUP,
  payload
});
export const signupSuccessAction = token => ({
  type: SIGNUP_SUCCESS,
  token
});
export const signupErrorAction = error => ({
  type: SIGNUP_ERROR,
  error
});

// logout ==============================================
export const logoutAction = () => ({
  type: LOGOUT
});
