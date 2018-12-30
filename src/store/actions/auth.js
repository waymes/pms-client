export const SIGNIN = 'AUTH/SIGNIN';
export const SIGNIN_SUCCESS = 'AUTH/SIGNIN_SUCCESS';
export const SIGNIN_ERROR = 'AUTH/SIGNIN_ERROR';

export const SIGNUP = 'AUTH/SIGNUP';
export const SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'AUTH/SIGNUP_ERROR';

export const LOGOUT = 'AUTH/LOGOUT';

// signin ==============================================
export const doSigninAction = payload => ({
  type: SIGNIN,
  payload
});
export const doSigninSuccessAction = token => ({
  type: SIGNIN_SUCCESS,
  token
});
export const doSigninErrorAction = error => ({
  type: SIGNIN_ERROR,
  error
});

// signup ==============================================
export const doSignupAction = payload => ({
  type: SIGNUP,
  payload
});
export const doSignupSuccessAction = token => ({
  type: SIGNUP_SUCCESS,
  token
});
export const doSignupErrorAction = error => ({
  type: SIGNUP_ERROR,
  error
});

// logout ==============================================
export const doLogout = () => ({
  type: LOGOUT
});
