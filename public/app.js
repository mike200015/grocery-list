'use strict';

angular.module('groceryList', [
  'ui.router',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial'
])
  .config(function ($urlRouterProvider, $locationProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('cyan', {
        'default': '700'
      })
      .backgroundPalette('grey', {
        'default': '100'
      });

  });
