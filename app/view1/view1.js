'use strict';

angular.module('ng-components.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
      $scope.data = [
        {
          id: 1,
          name: 'Sergey',
          surname: 'Brin'
        },
        {
          id: 2,
          name: 'Julia',
          surname: 'Ivanova'
        }
      ];

      $scope.tableOptions = {
        headers: ['id', 'name', 'surname'],
        edit: true,
        remove: false,
        cellHandlers: {
          id: function (value) {
            return value + '===';
          }
        },
        head: true,
        indices: true
      };

      $scope.test = function () {
        debugger;
      }
}]);