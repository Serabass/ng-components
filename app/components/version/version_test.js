'use strict';

describe('ng-components.version module', function() {
  beforeEach(module('ng-components.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
