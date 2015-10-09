'use strict';

angular.module('ng-components.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.tabs = [
            'tab1',
            'tab2',
            'tab3',
            'tab4'
        ];

        $scope.tab = 2;
    }]);