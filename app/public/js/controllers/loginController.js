angular.module('esame')
.controller('loginCtrl', ['$scope', '$http','$facebook','$location','Session', function($scope, $http, $facebook, $location,Session){

	$scope.login = function() {
		$facebook.login().then(function() {				
			refresh();
		});
	};

	function refresh() {
		$facebook.api("/me").then( 
			function(user) {
				Session.create(user);	
				$location.path('/home');			      			
			},
			function(err) {
				//$scope.welcomeMsg = "Please log in";
			});
	};
	
}]);



