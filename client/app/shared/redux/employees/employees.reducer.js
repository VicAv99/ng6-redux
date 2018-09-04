import * as empTypes from './employees.actionTypes';

const initialState = {
  data: [],
  error: ''
}

function EployeesReducer(state = initialState, {type, payload}) {
  switch (type) {
    case empTypes.LOAD_EMPLOYEES:
      return Object.assign({}, state, payload);
    case empTypes.LOAD_EMPLOYEES_SUCCESS:
      return Object.assign({}, state, payload);
    case empTypes.LOAD_EMPLOYEES_FAILURE:
      return Object.assign({}, state, payload);
    default:
      return Object.assign({}, state);
  }
}
