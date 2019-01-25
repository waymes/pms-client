import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { authRequest } from '../../helpers/request';
import {
  fetchMyPeopleSuccessAction, fetchMyPeopleErrorAction,
  fetchPersonSuccessAction, fetchPersonErrorAction,
  createNewPersonSuccessAction, createNewPersonErrorAction,
  updatePersonSuccessAction, updatePersonErrorAction,
  deletePersonSuccessAction, deletePersonErrorAction,
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
    yield authRequest({ url: `/people/${action.person._id}`, method: 'put', data: action.person });
    yield put(updatePersonSuccessAction());
  } catch (error) {
    yield put(updatePersonErrorAction(error));
  }
}

export function* deletePerson(action) {
  try {
    yield authRequest({ url: `/people/${action.personId}`, method: 'delete' });
    yield put(deletePersonSuccessAction(action.personId));
    yield put(push('/profile/people'));
  } catch (error) {
    yield put(deletePersonErrorAction(error));
  }
}
