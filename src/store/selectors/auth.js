const getAuth = state => state.auth;

// eslint-disable-next-line import/prefer-default-export
export const getToken = state => getAuth(state).token;
