import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth';
import userReducer from './user';
import peopleReducer from './people';

export default history => combineReducers({
  auth: authReducer,
  user: userReducer,
  people: peopleReducer,
  form: formReducer,
  router: connectRouter(history)
});
