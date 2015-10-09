
interface ICalendarScope extends ng.IScope {

}

var app = angular.module('ng-components');

app.directive('calendar', function () {
    return {
        restrict: 'E',
        scope: {
            date: '='
        },
        templateUrl: 'app/components/calendar/calendar.html',
        controller: ['$scope', CalendarCtrl]
    }
});


function CalendarCtrl($scope:ICalendarScope) {

}