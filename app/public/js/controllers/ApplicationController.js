angular.module('esame')
.controller('AppCtrl',['$scope','$http','Session' ,function($scope, $http, Session){

	$scope.user = null;

	$scope.setCurrentUser = function() {		
		$scope.user = Session.getUser();
		console.log($scope.user);
	};

	$scope.$on('$viewContentLoaded', function(){
		if(Session.logged) {
			$scope.setCurrentUser();			
		};   			
  	});	

}]);