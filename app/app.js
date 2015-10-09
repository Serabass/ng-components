'use strict';

// Declare app level module which depends on views, and components
angular.module('ng-components', [
    'ngRoute',
    'ng-components.view1',
    'ng-components.view2',
    'ng-components.version',
    'ng-components.templates',
    'ng-components.timeline'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
