class HomeController {
  name = 'home';
  employees = [];
  constructor($ngRedux, EmployeesService, EmployeesActions) {
    'ngInject';
    this.employeesService = EmployeesService;
    this.redux = $ngRedux;
    console.log($ngRedux.dispatch(EmployeesActions.loadEmployees()))
  }

  $onInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeesService.getEmployees()
      .then(res => this.employees = res.data)
      .catch(err => console.log('error', err));
  }

  createEmployee(employee) {
    this.employeesService.create(employee)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err));
  }

  updateEmployee(employee) {
    this.employeesService.update(employee)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err));
  }

  deleteEmployee(employeeId) {
    this.employeesService.delete(employeeId)
      .then(res => this.getAllEmployees())
      .catch(err => console.log('error', err));
  }
}

export default HomeController;
