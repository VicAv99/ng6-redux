import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import userService from "./services/user.service";

let sharedModule = angular.module('app.shared', [
  Navbar,
  Hero,
  userService
])
  
.name;

export default sharedModule;
