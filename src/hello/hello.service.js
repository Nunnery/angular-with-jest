/* @ngInject */
export default class HelloService {
  constructor() {
  }

  getMessage(name = 'world') {
    return `Hello, ${name}!`;
  }
};
