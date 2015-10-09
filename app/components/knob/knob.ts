interface IKnobScope extends ng.IScope {
    counter:number;
    value:number;
}

class KnobDirective implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        value: '=ngModel',
        min: '=',
        max: '='
    };

    public constructor() {}

    public templateUrl = 'app/components/knob/knob.html';

    public link(scope:any, element:any, attrs:any) {
        var point = 0,
            pressed = false,
            offset = 0;
        element.on('mousedown', function (e:any) {
            point = e.pageX;
            offset = scope.value;
            pressed = true;
        }).on('mouseup', function (e:any) {
            pressed = false;
        }).on('mousemove', function (e:any) {
            if (pressed) {
                scope.$apply(function () {
                    scope.value = offset + e.pageX - point;
                });
            }
        });
    }

    public controller = ['$scope', function ($scope:IKnobScope) {

        $scope.$watch('value', function () {
            $scope.counter = Math.floor($scope.value / 360);
        });

        $scope.counter = 0;
    }];
}

angular.module('ng-components.knob', [])
    .directive('knob', [() => new KnobDirective()]);
