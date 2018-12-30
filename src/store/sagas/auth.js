import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { authRequest } from '../../helpers/request';
import {
  doSigninSuccessAction, doSigninErrorAction,
  doSignupSuccessAction, doSignupErrorAction
} from '../actions/auth';

export function* doSignin(action) {
  try {
    const response = yield authRequest({
      url: '/auth/signin',
      method: 'POST',
      data: action.payload
    });
    yield put(doSigninSuccessAction(response.data.token));
    yield put(push('/profile'));
  } catch (error) {
    yield put(doSigninErrorAction(error));
  }
}

export function* doSignup(action) {
  try {
    const response = yield authRequest({
      url: '/auth/signup',
      method: 'POST',
      data: action.payload
    });
    yield put(doSignupSuccessAction(response.data.token));
    yield put(push('/profile'));
  } catch (error) {
    yield put(doSignupErrorAction(error));
  }
}
