
interface ITimelineScope extends ng.IScope {
    seconds:number[];
}

var app = angular.module('ng-components.timeline', []);

app.directive('timeline', () => ({
        restrict: 'E',
        scope: {
            time: '=',
            max: '='
        },
        templateUrl: 'app/components/timeline/timeline.html',
        controller: ['$scope', TimelineCtrl]
    })
)

.filter('secondsToDateTime', function() {
    return function(seconds:any) {
        var d = new Date(0,0,0,0,0,0,0);
        d.setSeconds(seconds);
        return d;
    };
});

function TimelineCtrl($scope:ITimelineScope) {
    $scope.seconds = [];

    $scope.$watch('max', function (n:number) {
        $scope.seconds = Array.apply(null, Array(n)).map((_:any, i:number) => i);
    });
}
