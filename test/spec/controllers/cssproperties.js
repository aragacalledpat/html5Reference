'use strict';

describe('Controller: CsspropertiesCtrl', function () {

  // load the controller's module
  beforeEach(module('html5ReferenceApp'));

  var CsspropertiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CsspropertiesCtrl = $controller('CsspropertiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CsspropertiesCtrl.awesomeThings.length).toBe(3);
  });
});
