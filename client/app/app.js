import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Shared from './shared/shared';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
// Redux
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux';
import reducers from './shared/redux/reducers';

const reducer = combineReducers(reducers);
const storeEnhancers = [];

angular.module('app', [
    uiRouter,
    Shared,
    Components,
    ngRedux
  ])
  .config(($locationProvider, $ngReduxProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $ngReduxProvider.createStoreWith(
      reducer, [thunk], storeEnhancers
    )
  })

  .component('app', AppComponent);
