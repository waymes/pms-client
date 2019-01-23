import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { authRequest } from '../../helpers/request';
import {
  fetchMyPeopleSuccessAction, fetchMyPeopleErrorAction,
  fetchPersonSuccessAction, fetchPersonErrorAction,
  createNewPersonSuccessAction, createNewPersonErrorAction,
  updatePersonSuccessAction, updatePersonErrorAction,
} from '../actions/people';

export function* fetchMyPeople() {
  try {
    const response = yield authRequest({ url: '/people/my' });
    yield put(fetchMyPeopleSuccessAction(response.data));
  } catch (error) {
    yield put(fetchMyPeopleErrorAction(error));
  }
}

export function* fetchPerson(action) {
  try {
    const response = yield authRequest({ url: `/people/${action.personId}` });
    yield put(fetchPersonSuccessAction(response.data));
  } catch (error) {
    yield put(fetchPersonErrorAction(error));
  }
}

export function* createNewPerson(action) {
  try {
    const response = yield authRequest({ url: '/people', method: 'post', data: action.person });
    yield put(createNewPersonSuccessAction(response.data));
    yield put(push(`/profile/people/${response.data._id}`));
  } catch (error) {
    yield put(createNewPersonErrorAction(error));
  }
}

export function* updatePerson(action) {
  try {
    const response = yield authRequest({ url: '/people', method: 'put', data: action.person });
    yield put(updatePersonSuccessAction(response.data));
  } catch (error) {
    yield put(updatePersonErrorAction(error));
  }
}
