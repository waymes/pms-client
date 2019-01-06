import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { authRequest } from '../../helpers/request';
import {
  loginSuccessAction, loginErrorAction,
  signupSuccessAction, signupErrorAction
} from '../actions/auth';

export function* login(action) {
  try {
    const response = yield authRequest({
      url: '/auth/login',
      method: 'POST',
      data: action.payload
    });
    yield put(loginSuccessAction(response.data.token));
    yield put(push('/profile'));
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

export function* signup(action) {
  try {
    const response = yield authRequest({
      url: '/auth/signup',
      method: 'POST',
      data: action.payload
    });
    yield put(signupSuccessAction(response.data.token));
    yield put(push('/profile'));
  } catch (error) {
    yield put(signupErrorAction(error));
  }
}
