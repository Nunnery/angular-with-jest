import angular from 'angular';
import uiRouter from "@uirouter/angularjs";

import {uiRouterConfig, uiRouterPluginsConfig} from './app.config';
import commonModule from './common/common.module';
import helloModule from './hello/hello.module';

import './index.scss';

export default angular.module('app', [uiRouter, commonModule.name, helloModule.name])
  .config(uiRouterConfig)
  .config(uiRouterPluginsConfig);
