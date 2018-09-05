import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import employeesService from "./services/employees.service";
import actionsModule from './redux/actions';

let sharedModule = angular.module('app.shared', [
  actionsModule,
  Navbar,
  Hero,
  employeesService,
])

.name;

export default sharedModule;
