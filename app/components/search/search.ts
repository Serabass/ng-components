interface ISearchScope extends ng.IScope {
    complete():any;
    onComplete:string;
    query:string;
}

class SearchDirective implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        onComplete: '@'
    };
    public templateUrl = 'app/components/search/search.html';
    public controller = ['$scope', function ($scope:ISearchScope) {
        $scope.query = '';
        $scope.complete = function () {
            $scope.$parent.$eval($scope.onComplete, {
                query: $scope.query
            });
        };
    }]
}

angular.module('ng-components.search', [])
    .directive('search', () => new SearchDirective());
