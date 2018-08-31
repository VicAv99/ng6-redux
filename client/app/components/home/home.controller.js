class HomeController {
  constructor(userService) {
    'ngInject';
    this.userService = userService;
    this.name = 'home';
  }

  $onInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getItems();
  }

  createUser(user) {
    this.userService.createItem(user);
  }

  updateUser(user) {
    this.userService.updateItem(user);
  }

  deleteUser(user) {
    this.userService.deleteItem(user);
  }
}

export default HomeController;
