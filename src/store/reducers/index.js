import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth';

export default history => combineReducers({
  auth: authReducer,
  form: formReducer,
  router: connectRouter(history)
});
