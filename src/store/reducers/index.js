import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  form: formReducer,
  router: connectRouter(history)
});
