import {
  FETCH_MY_PEOPLE, FETCH_MY_PEOPLE_SUCCESS, FETCH_MY_PEOPLE_ERROR,
  FETCH_PERSON, FETCH_PERSON_SUCCESS, FETCH_PERSON_ERROR,
  CREATE_NEW_PERSON, CREATE_NEW_PERSON_SUCCESS, CREATE_NEW_PERSON_ERROR,
  UPDATE_PERSON, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR,
  DELETE_PERSON, DELETE_PERSON_SUCCESS, DELETE_PERSON_ERROR,
  CLEAR_PERSON,
} from '../actions/people';
import { getErrorMessage } from '../../helpers/request';

const initialState = {
  peopleList: [],
  person: null,
  peopleListLoading: false,
  personLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_PEOPLE:
      return { ...state, error: null, peopleListLoading: true };
    case FETCH_MY_PEOPLE_SUCCESS:
      return { ...state, peopleList: action.peopleList, peopleListLoading: false };
    case FETCH_MY_PEOPLE_ERROR:
      return { ...state, error: getErrorMessage(action.error), peopleListLoading: false };
    case CREATE_NEW_PERSON:
      return { ...state, error: null, personLoading: true };
    case CREATE_NEW_PERSON_SUCCESS:
      return { ...state, person: action.person, personLoading: false };
    case CREATE_NEW_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), personLoading: false };
    case UPDATE_PERSON:
      return { ...state, error: null, personLoading: true };
    case UPDATE_PERSON_SUCCESS:
      return { ...state, personLoading: false };
    case UPDATE_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), personLoading: false };
    case DELETE_PERSON:
      return { ...state, error: null, personLoading: true };
    case DELETE_PERSON_SUCCESS:
      return {
        ...state,
        personLoading: false,
        peopleList: state.peopleList.filter(person => person._id !== action.personId)
      };
    case DELETE_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), personLoading: false };
    case FETCH_PERSON:
      return { ...state, error: null, personLoading: true };
    case FETCH_PERSON_SUCCESS:
      return { ...state, person: action.person, personLoading: false };
    case FETCH_PERSON_ERROR:
      return { ...state, error: getErrorMessage(action.error), personLoading: false };
    case CLEAR_PERSON:
      return { ...state, person: null };
    default:
      return state;
  }
}
