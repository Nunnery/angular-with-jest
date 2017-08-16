/* @ngInject */
export default class EnvironmentService {
  constructor() {
  }

  getNodeEnvironment() {
    return process.env.NODE_ENV;
  }

  getMobileEnvironment() {
    return process.env.MOBILE_ENV;
  }

  getVersion() {
    return process.env.VERSION;
  }
};
