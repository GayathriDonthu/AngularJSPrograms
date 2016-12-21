/**
 * 
 */

var MainController = function($scope, $http){
	
	var onUserComplete = function(response){
		$scope.user = response.data;
	};
	
	var OnError = function(reason){
		$scope.error = "Could not fetch the user";
	};
	
	$http.get("https://api.github.com/users/avinashbabudonthu")
		.then(onUserComplete, OnError);
	
	$scope.message = "Hello, Gayathri";
	
};