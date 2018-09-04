import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import actionsModule from './redux/actions';
import userService from "./services/user.service";

let sharedModule = angular.module('app.shared', [
  actionsModule.name,
  Navbar,
  Hero,
  userService,
])

.name;

export default sharedModule;
