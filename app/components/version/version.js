'use strict';

angular.module('ng-components.version', [
  'ng-components.version.interpolate-filter',
  'ng-components.version.version-directive'
])

.value('version', '0.1');
