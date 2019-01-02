import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth';
import userReducer from './user';

export default history => combineReducers({
  auth: authReducer,
  user: userReducer,
  form: formReducer,
  router: connectRouter(history)
});
