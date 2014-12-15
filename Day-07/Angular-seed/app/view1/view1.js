'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	$scope.message = "[Greet Message to be displayed here]";

	$scope.name = "";

	$scope.greet = function(){
		$scope.message = "Hello " + $scope.name + ", Have a nice day!";
	}
});