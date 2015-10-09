
interface ISliderScope extends ng.IScope {

}

var app = angular.module('ng-components.slider', []);

app.directive('sSlider', () => ({
        restrict: 'E',
        scope: {

        },
        templateUrl: 'app/components/slider/slider.html',
        controller: ['$scope', SliderCtrl]
    })
);

function SliderCtrl($scope:ISliderScope) {

}
