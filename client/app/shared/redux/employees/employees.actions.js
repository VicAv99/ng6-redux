import * as empTypes from './employees.actionTypes';

export class EmployeesActions {
  constructor(EmployeesService) {
    'ngInject';
    this.employeesService = EmployeesService;
  }

  loadEmployees() {
    return dispatch => {
      return this.employeesService.getEmployees()
        .then(emp => dispatch(this.loadEmployeesSuccess(emp)))
        .catch(err => {
          dispatch(this.loadEmployeesFailure(err));
        })
    }
    // return {
    //   type: empTypes.LOAD_EMPLOYEES
    // };
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
