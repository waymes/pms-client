const getUser = state => state.user;

export const getUserInfo = state => getUser(state).user;
export const getUserIsLoading = state => getUser(state).loading;
