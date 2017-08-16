import {StickyStatesPlugin} from '@uirouter/sticky-states';
import {DSRPlugin} from '@uirouter/dsr';
import {visualizer} from "@uirouter/visualizer";

import {app} from './app.states';

/* @ngInject */
export function uiRouterPluginsConfig($uiRouterProvider) {
  $uiRouterProvider.plugin(StickyStatesPlugin);
  $uiRouterProvider.plugin(DSRPlugin);
  if (process.env.NODE_ENV === 'development') {
    visualizer($uiRouterProvider);
  }
}

/* @ngInject */
export function uiRouterConfig($uiRouterProvider) {
  // If the user enters a URL that doesn't match any known URL (state), send them to '/hello'
  const $urlService = $uiRouterProvider.urlService;
  $urlService.rules.otherwise({state: 'hello'});

  const $stateRegistry = $uiRouterProvider.stateRegistry;
  $stateRegistry.register(app);
}
