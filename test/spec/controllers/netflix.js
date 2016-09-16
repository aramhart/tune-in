'use strict';

describe('Controller: NetflixCtrl', function () {

  // load the controller's module
  beforeEach(module('moviefunApp'));

  var NetflixCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NetflixCtrl = $controller('NetflixCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NetflixCtrl.awesomeThings.length).toBe(3);
  });
});
