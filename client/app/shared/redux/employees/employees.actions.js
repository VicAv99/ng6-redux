import * as empTypes from './employees.actionTypes';

function EmployeesActions(EmployeesService) {
  'ngInject';

  function loadEmployees() {
    return dispatch => {
      return EmployeesService.getEmployees()
        .then(emp => dispatch(this.loadEmployeesSuccess(emp)))
        .catch(err => {
          dispatch(this.loadEmployeesFailure(err));
        })
    }
    // return {
    //   type: empTypes.LOAD_EMPLOYEES
    // };
  };

  function loadEmployeesSuccess(emp) {
    return {
      type: empTypes.LOAD_EMPLOYEES_SUCCESS,
      payload: emp
    };
  };

  function loadEmployeesFailure() {
    return {
      type: empTypes.LOAD_EMPLOYEES_FAILURE
    };
  };

  return {
    loadEmployees,
    loadEmployeesSuccess,
    loadEmployeesFailure
  }
}

export default EmployeesActions;
