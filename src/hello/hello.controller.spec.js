import hello from './hello.module';

describe('HelloController', () => {
  let ctrl;

  beforeEach(angular.mock.module(hello.name));

  beforeEach(angular.mock.inject($injector => {
    ctrl = $injector.get('$componentController')('hello');
  }));

  it('exists', () => {
    expect(ctrl).toBeDefined();
  });

  describe('.constructor', () => {
    it('has initial state()', () => {
      expect(ctrl.hello).toBe('Hello, world!');
      expect(ctrl.environment).toBeDefined();
      expect(ctrl.environment).toBe(process.env.NODE_ENV);
      expect(ctrl.mobileEnv).toBeUndefined();
      expect(ctrl.version).toBeUndefined();
    });
  });
});
