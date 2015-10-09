interface ITabsScope extends ng.IScope {
    tab:number;
}

class TabDirective implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        tab: '=ngModel',
        tabs: '='
    };
    public templateUrl = 'app/components/tabs/tabs.html';
    public controller = ['$scope', function ($scope:ITabsScope) {

    }];
}

angular.module('ng-components.tabs', [])
    .directive('tabs', () => new TabDirective);

