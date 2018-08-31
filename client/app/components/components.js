import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Shared from '../shared/shared'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Shared
])

.name;

export default componentModule;
