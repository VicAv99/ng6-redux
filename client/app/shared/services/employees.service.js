import angular from 'angular';
class EmployeesService {
  url = 'https://levelup-json.now.sh/employees';
  constructor($http) {
    'ngInject';
    this.http = $http;
  }

  getEmployees() {
    return this.http
      .get(this.url);
  }

  create(employee) {
    return this.http
      .post(this.url, employee);
  }

  update(employee) {
    return this.http
      .patch(`${this.url}/${employee.id}`, employee);
  }

  delete(employeeId) {
    return this.http
      .delete(`${this.url}/${employeeId}`);
  }
}
let employeesService = angular.module('EmployeesService', [])
  .service('EmployeesService', EmployeesService).name;
export default employeesService
