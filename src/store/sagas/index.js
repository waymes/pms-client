import { takeEvery } from 'redux-saga/effects';

import { LOGIN, SIGNUP } from '../actions/auth';
import { FETCH_CURRENT_USER } from '../actions/user';
import { FETCH_MY_PEOPLE, FETCH_PERSON, CREATE_NEW_PERSON, UPDATE_PERSON } from '../actions/people';
import { login, signup } from './auth';
import { fetchCurrentUser } from './user';
import { fetchMyPeople, fetchPerson, createNewPerson, updatePerson } from './people';

export default function* rootSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(SIGNUP, signup);

  yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser);

  yield takeEvery(FETCH_MY_PEOPLE, fetchMyPeople);
  yield takeEvery(FETCH_PERSON, fetchPerson);
  yield takeEvery(CREATE_NEW_PERSON, createNewPerson);
  yield takeEvery(UPDATE_PERSON, updatePerson);
}
