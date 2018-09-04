import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import actionsModule from './redux/actions';
import employeesService from "./services/employees.service";

let sharedModule = angular.module('app.shared', [
  actionsModule.name,
  Navbar,
  Hero,
  employeesService,
])

.name;

export default sharedModule;
