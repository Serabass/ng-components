interface ISliderScope extends ng.IScope {

}

angular.module('ng-components.slider', [])
    .directive('sSlider', () => new SSliderDirective);

class SSliderDirective implements ng.IDirective {
    public restrict = 'E';
    public scope = {};
    public templateUrl = 'app/components/slider/slider.html';
    public controller = ['$scope', function ($scope:ISliderScope) {

    }];
}