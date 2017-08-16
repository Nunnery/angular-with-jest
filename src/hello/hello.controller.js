/* @ngInject */
export default class HelloController {
  constructor(EnvironmentService, HelloService) {
    this.hello = HelloService.getMessage();
    this.environment = EnvironmentService.getNodeEnvironment();
    this.mobileEnv = EnvironmentService.getMobileEnvironment();
    this.version = EnvironmentService.getVersion();
  }
}
