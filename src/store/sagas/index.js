import { takeEvery } from 'redux-saga/effects';

import { LOGIN, SIGNUP } from '../actions/auth';
import { FETCH_CURRENT_USER } from '../actions/user';
import { login, signup } from './auth';
import { fetchCurrentUser } from './user';

export default function* rootSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(SIGNUP, signup);
  yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser);
}
