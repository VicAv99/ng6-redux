import angular from 'angular';
class UserService {
  url = 'https://some-api.com';
  constructor($http) {
    'ngInject';
    this.http = $http;
  }

  getItems() {
    console.log('Service is working...YOU GOT MAIL! ✉️')
  }

  createItem(item) {
    console.log('ITEM CREATED!', item)
  }
  updateItem(item) {
    console.log('ITEM UPDATED!', item)
  }
  deleteItem(item) {
    console.log('ITEM DELETED!', item)
  }
}
let userService = angular.module('userService', [])
  .service('userService', UserService).name;
export default userService
