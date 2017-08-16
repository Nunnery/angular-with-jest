import angular from 'angular';

import EnvironmentService from './environment.service';

export default angular.module('app.common', [])
  .service('EnvironmentService', EnvironmentService);
