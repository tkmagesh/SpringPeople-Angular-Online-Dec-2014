'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should instantiate the controller', inject(function($controller, $rootScope) {
    	var scope = $rootScope.$new();
      //spec body
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should have the default message in the scope', inject(function($controller, $rootScope) {
    	var scope = $rootScope.$new();
      //spec body
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      expect(scope.message).toBe("[Greet Message to be displayed here]");
    }));

    it('should populate the message with greet msg on greet()', inject(function($controller, $rootScope) {
    	var scope = $rootScope.$new();
      //spec body
      var view1Ctrl = $controller('View1Ctrl', {$scope : scope});
      scope.name = "Magesh";
      scope.greet();
      expect(scope.message).toBe("Hello Magesh, Have a nice day!");
    }));

  });
});