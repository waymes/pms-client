import { takeEvery } from 'redux-saga/effects';

import { SIGNIN, SIGNUP } from '../actions/auth';
import { doSignin, doSignup } from './auth';

export default function* rootSaga() {
  yield takeEvery(SIGNIN, doSignin);
  yield takeEvery(SIGNUP, doSignup);
}
