/**
 * 
 */

var MainController = function($scope){
	
	var person = {
			firstName: "Gayathri",
			lastName: "Guttikonda",
		    imageSrc: "../images/Gayathri.png"
			
	};
	
	$scope.message = "Hello, Gayathri";
	$scope.person = person;
	
};