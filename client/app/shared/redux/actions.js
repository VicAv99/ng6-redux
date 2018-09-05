import angular from 'angular';
import EmployeesActions from './employees/employees.actions';

const actionsModule = angular.module('actions', [])
  .service('EmployeesActions', EmployeesActions).name;

export default actionsModule;
