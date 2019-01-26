import { put } from 'redux-saga/effects';

import { authRequest } from '../../helpers/request';
import {
  fetchCurrentUserSuccessAction, fetchCurrentUserErrorAction,
  updateCurrentUserSuccessAction, updateCurrentUserErrorAction
} from '../actions/user';

export function* fetchCurrentUser() {
  try {
    const response = yield authRequest({ url: '/user' });
    yield put(fetchCurrentUserSuccessAction(response.data));
  } catch (error) {
    yield put(fetchCurrentUserErrorAction(error));
  }
}

export function* updateCurrentUser({ user }) {
  try {
    yield authRequest({ url: `/user/${user._id}`, method: 'put', data: user });
    yield put(updateCurrentUserSuccessAction(user));
  } catch (error) {
    yield put(updateCurrentUserErrorAction(error));
  }
}
