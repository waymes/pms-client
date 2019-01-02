import { put } from 'redux-saga/effects';

import { authRequest } from '../../helpers/request';
import {
  fetchCurrentUserSuccessAction, fetchCurrentUserErrorAction
} from '../actions/user';

export function* fetchCurrentUser(action) {
  try {
    const response = yield authRequest({ url: '/user' });
    yield put(fetchCurrentUserSuccessAction(response.data));
  } catch (error) {
    yield put(fetchCurrentUserErrorAction(error));
  }
}
