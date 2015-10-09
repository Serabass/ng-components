
interface ITableScope extends ng.IScope {
    handleValue(value:any, index?:any, row?:any, rowIndex?:any):any;
    onCellClick(value:any, index?:any, row?:any, rowIndex?:any):any;
    options:any;
    cellClick:any;
}

var app = angular.module('ng-components.table', []);

app.directive('sTable', () => ({
        restrict: 'A',
        scope: {
            data: '=sTable',
            options: '=sTableOptions',
            cellClick: '=sTableCellClick',
        },
        templateUrl: 'app/components/table/table.html',
        controller: ['$scope', TableCtrl]
    })
);

function TableCtrl($scope:ITableScope) {
    $scope.handleValue = function (value:any, index:any, row:any, rowIndex:any) {
        var op = $scope.options;
        var handlers = $scope.options.cellHandlers;

        return (handlers[index] || angular.identity)(value, index, row, rowIndex);
    };

    $scope.onCellClick = function (cell:any, index:any, row:any, rowIndex:any) {
        $scope.$eval($scope.cellClick, {cell, index, row, rowIndex});
    }
}