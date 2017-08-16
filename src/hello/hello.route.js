import {helloState} from './hello.states';

/* @ngInject */
export function uiRouterConfig($uiRouterProvider) {
  const $stateRegistry = $uiRouterProvider.stateRegistry;
  $stateRegistry.register(helloState);
}
