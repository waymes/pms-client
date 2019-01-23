import {
  FETCH_MY_PEOPLE, FETCH_MY_PEOPLE_SUCCESS, FETCH_MY_PEOPLE_ERROR,
  FETCH_PERSON, FETCH_PERSON_SUCCESS, FETCH_PERSON_ERROR,
  CREATE_NEW_PERSON, CREATE_NEW_PERSON_SUCCESS, CREATE_NEW_PERSON_ERROR,
  UPDATE_PERSON, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR,
  CLEAR_PERSON,
} from '../actions/people';
import { getErrorMessage } from '../../helpers/request';

const initialState = {
  peopleList: [],
  person: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_PEOPLE:
      return { ...state, error: null, loading: true };
    case FETCH_MY_PEOPLE_SUCCESS:
      return { ...state, peopleList: action.peopleList, loading: false };
    case FETCH_MY_PEOPLE_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case CREATE_NEW_PERSON:
      return { ...state, error: null, loading: true };
    case CREATE_NEW_PERSON_SUCCESS:
      return { ...state, person: action.person, loading: false };
    case CREATE_NEW_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case UPDATE_PERSON:
      return { ...state, error: null, loading: true };
    case UPDATE_PERSON_SUCCESS:
      return { ...state, person: action.person, loading: false };
    case UPDATE_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case FETCH_PERSON:
      return { ...state, error: null, loading: true };
    case FETCH_PERSON_SUCCESS:
      return { ...state, person: action.person, loading: false };
    case FETCH_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), loading: false };
    case CLEAR_PERSON:
      return { ...state, person: null };
    default:
      return state;
  }
}
