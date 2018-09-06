class HomeController {
  name = 'home';
  employees = [];
  constructor($ngRedux, EmployeesActions) {
    'ngInject';
    this.redux = $ngRedux;
    this.employeesActions = EmployeesActions;
  }

  $onInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.redux.dispatch(this.employeesActions.loadEmployees())
      .then(emp => this.employees = emp.payload.data);
  }

  createEmployee(employee) {
  //   this.employeesService.create(employee)
  //     .then(res => this.getAllEmployees())
  //     .catch(err => console.log('error', err));
  }

  updateEmployee(employee) {
  //   this.employeesService.update(employee)
  //     .then(res => this.getAllEmployees())
  //     .catch(err => console.log('error', err));
  }

  deleteEmployee(employeeId) {
  //   this.employeesService.delete(employeeId)
  //     .then(res => this.getAllEmployees())
  //     .catch(err => console.log('error', err));
  }
}

export default HomeController;
