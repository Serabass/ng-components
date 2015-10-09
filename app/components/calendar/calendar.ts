interface ICalendarScope extends ng.IScope {
    date:Date;
    getDays():Date[];
    days:Date[];
    rows:any[];
    year:number;
    month:number;
}

function daysInMonth(year:number, month:number) {
    switch (month) {
        case 1:
            return year % 4 === 0 ? 28 : 29;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        default:
            return 31;
    }
}


class CalendarDirective implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        date: '=',
        month: '=',
        year: '='
    };
    public templateUrl = 'app/components/calendar/calendar.html';
    public controller = ['$scope', function ($scope:ICalendarScope) {

        $scope.$watch('date', function () {
            $scope.days = $scope.getDays();
            $scope.rows = (function () {
                var result:any[][] = [],
                    year = $scope.year,
                    month = $scope.month - 1,
                    daysNum = daysInMonth(year, month)
                    ;

                var firstDay:Date = new Date(year, month, 1);


                for (var i = 0; i < daysNum; i++) {
                    result
                }

                return result;
            }());
        });

        $scope.getDays = () => {
            var result:Date[] = [],
                year:number = $scope.date.getFullYear(),
                month:number = $scope.date.getMonth(),
                daysNum = daysInMonth(year, month)
                ;

            for (var i = 1; i <= daysNum; i++) {
                result.push(new Date(year, month, i));
            }

            return result;
        };
    }];
}


angular.module('ng-components.calendar', []).directive('calendar', () => new CalendarDirective());
