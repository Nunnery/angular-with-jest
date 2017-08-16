import commonModule from './common.module';
import EnvironmentService from './environment.service';

describe('EnvironmentService', () => {
  let service;

  beforeEach(angular.mock.module(commonModule.name));

  beforeEach(angular.mock.inject(() => {
    service = new EnvironmentService();
  }));

  it('exists', () => {
    expect(service).toBeDefined();
  });

  describe('#getNodeEnvironment()', () => {
    it('exists', () => {
      expect(service.getNodeEnvironment).toBeDefined();
    });

    it('returns process.env.NODE_ENV', () => {
      expect(service.getNodeEnvironment()).toBe(process.env.NODE_ENV);
    });
  });
});
