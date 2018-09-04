import * as empTypes from './employees.actionTypes';

export class employeesActions {
  constructor() {
    'ngInject';
  }

  loadEmployees() {
    return {
      type: empTypes.LOAD_EMPLOYEES
    };
  };

  loadEmployeesSuccess() {
    return {
      type: empTypes.LOAD_EMPLOYEES_SUCCESS
    };
  };

  loadEmployeesFailure() {
    return {
      type: empTypes.LOAD_EMPLOYEES_FAILURE
    };
  };
}
