import { takeEvery } from 'redux-saga/effects';

import { SIGNIN, SIGNUP } from '../actions/auth';
import { FETCH_CURRENT_USER } from '../actions/user';
import { doSignin, doSignup } from './auth';
import { fetchCurrentUser } from './user';

export default function* rootSaga() {
  yield takeEvery(SIGNIN, doSignin);
  yield takeEvery(SIGNUP, doSignup);
  yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser);
}
