import { takeLatest } from 'redux-saga/effects';

import { LOGIN, SIGNUP } from '../actions/auth';
import { FETCH_CURRENT_USER } from '../actions/user';
import { FETCH_MY_PEOPLE, FETCH_PERSON, CREATE_NEW_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../actions/people';
import { login, signup } from './auth';
import { fetchCurrentUser } from './user';
import { fetchMyPeople, fetchPerson, createNewPerson, updatePerson, deletePerson } from './people';

export default function* rootSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(SIGNUP, signup);

  yield takeLatest(FETCH_CURRENT_USER, fetchCurrentUser);

  yield takeLatest(FETCH_MY_PEOPLE, fetchMyPeople);
  yield takeLatest(FETCH_PERSON, fetchPerson);
  yield takeLatest(CREATE_NEW_PERSON, createNewPerson);
  yield takeLatest(UPDATE_PERSON, updatePerson);
  yield takeLatest(DELETE_PERSON, deletePerson);
}
