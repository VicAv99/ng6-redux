import angular from 'angular';
import employeesActions from './employees/employees.actions';

const actionsModule = angular.module('actions', [])
  .service('EmployeeActions', employeesActions);

export default actionsModule;
