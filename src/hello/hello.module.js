import angular from 'angular';

import commonModule from '../common/common.module';
import uiRouter from "@uirouter/angularjs";

import {hello} from './hello.component';
import HelloService from './hello.service';
import {uiRouterConfig} from './hello.route';

export default angular.module('app.hello', [uiRouter, commonModule.name])
  .component('hello', hello)
  .service('HelloService', HelloService)
  .config(uiRouterConfig);
