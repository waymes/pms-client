export const FETCH_MY_PEOPLE = 'PEOPLE/FETCH_MY_PEOPLE';
export const FETCH_MY_PEOPLE_SUCCESS = 'PEOPLE/FETCH_MY_PEOPLE_SUCCESS';
export const FETCH_MY_PEOPLE_ERROR = 'PEOPLE/FETCH_MY_PEOPLE_ERROR';

export const FETCH_PERSON = 'PEOPLE/FETCH_PERSON';
export const FETCH_PERSON_SUCCESS = 'PEOPLE/FETCH_PERSON_SUCCESS';
export const FETCH_PERSON_ERROR = 'PEOPLE/FETCH_PERSON_ERROR';

export const CREATE_NEW_PERSON = 'PEOPLE/CREATE_NEW_PERSON';
export const CREATE_NEW_PERSON_SUCCESS = 'PEOPLE/CREATE_NEW_PERSON_SUCCESS';
export const CREATE_NEW_PERSON_ERROR = 'PEOPLE/CREATE_NEW_PERSON_ERROR';

export const UPDATE_PERSON = 'PEOPLE/UPDATE_PERSON';
export const UPDATE_PERSON_SUCCESS = 'PEOPLE/UPDATE_PERSON_SUCCESS';
export const UPDATE_PERSON_ERROR = 'PEOPLE/UPDATE_PERSON_ERROR';

export const CLEAR_PERSON = 'PEOPLE/CLEAR_PERSON';

// fetchMyPeople ================================================
export const fetchMyPeopleAction = () => ({
  type: FETCH_MY_PEOPLE
});
export const fetchMyPeopleSuccessAction = peopleList => ({
  type: FETCH_MY_PEOPLE_SUCCESS,
  peopleList
});
export const fetchMyPeopleErrorAction = error => ({
  type: FETCH_MY_PEOPLE_ERROR,
  error
});

// fetchPerson ==================================================
export const fetchPersonAction = (personId) => ({
  type: FETCH_PERSON,
  personId
});
export const fetchPersonSuccessAction = person => ({
  type: FETCH_PERSON_SUCCESS,
  person
});
export const fetchPersonErrorAction = error => ({
  type: FETCH_PERSON_ERROR,
  error
});

// createNewPerson ==============================================
export const createNewPersonAction = (person) => ({
  type: CREATE_NEW_PERSON,
  person
});
export const createNewPersonSuccessAction = person => ({
  type: CREATE_NEW_PERSON_SUCCESS,
  person
});
export const createNewPersonErrorAction = error => ({
  type: CREATE_NEW_PERSON_ERROR,
  error
});

// updatePerson =================================================
export const updatePersonAction = (person) => ({
  type: UPDATE_PERSON,
  person
});
export const updatePersonSuccessAction = person => ({
  type: UPDATE_PERSON_SUCCESS,
  person
});
export const updatePersonErrorAction = error => ({
  type: UPDATE_PERSON_ERROR,
  error
});

// clearUser ====================================================
export const clearPersonAction = (person) => ({
  type: CLEAR_PERSON,
});