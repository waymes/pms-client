const getAuth = state => state.auth;

export const getToken = state => getAuth(state).token;
export const getLoading = state => getAuth(state).loading;
