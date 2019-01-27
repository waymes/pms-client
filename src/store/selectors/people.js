const getPeople = state => state.people;

export const getPeopleList = state => getPeople(state).peopleList;
export const getPerson = state => getPeople(state).person;
export const getPeopleIsLoading = state => getPeople(state).peopleListLoading;
export const getPersonIsLoading = state => getPeople(state).personLoading;
export const getPeopleError = state => getPeople(state).error;
