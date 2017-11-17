'use strict';

/**
 * Contains the routes for the unified module.
 */
angular.module('groceryList')
    .run(['routerHelper', function (routerHelper) {
        routerHelper.configureStates(getStates());

        function getStates() {
            return [
                {
                    state: 'home',
                    config: {
                        templateUrl: 'components/home/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'homeVm',
                        url: '/'
                    }
                }
            ];
        }
    }]);
