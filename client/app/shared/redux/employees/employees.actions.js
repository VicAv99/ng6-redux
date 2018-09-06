import * as empTypes from './employees.actionTypes';

function EmployeesActions(EmployeesService, $q) {
  'ngInject';

  function loadEmployees() {
    return dispatch => {
      return EmployeesService.getEmployees()
        .then(employees => dispatch(loadEmployeesSuccess(employees)))
        .catch(error => {
          dispatch(loadEmployeesFailure(error));
          return $q.reject(error);
        });
    };
  };

  function loadEmployeesSuccess(employees) {
    return {
      type: empTypes.LOAD_EMPLOYEES_SUCCESS,
      payload: employees
    };
  };

  function loadEmployeesFailure(error) {
    return {
      type: empTypes.LOAD_EMPLOYEES_FAILURE,
      payload: error
    };
  };

  return {
    loadEmployees,
    loadEmployeesSuccess,
    loadEmployeesFailure
  }
}

export default EmployeesActions;
