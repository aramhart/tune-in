'use strict';

describe('Service: guideBoxApiFactory', function () {

  // load the service's module
  beforeEach(module('moviefunApp'));

  // instantiate service
  var guideBoxApiFactory;
  beforeEach(inject(function (_guideBoxApiFactory_) {
    guideBoxApiFactory = _guideBoxApiFactory_;
  }));

  it('should do something', function () {
    expect(!!guideBoxApiFactory).toBe(true);
  });

});
