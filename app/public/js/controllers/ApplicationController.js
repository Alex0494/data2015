angular.module('esame')
.controller('AppCtrl',['$scope','$http', '$facebook', 'Session', function($scope, $http, $facebook, Session){
	
	$scope.user = null;

	$scope.getPictures = function() {		
		$facebook.api('/me/photos').then(function(resp){
			if(resp) {
				$scope.pictures = resp.data;				
			}else{
				console.log("error");
			}
		});
	};
	//init function
	$scope.$on('$viewContentLoaded', function(){
		if(Session.logged) {
			$facebook.api('/me').then(function(resp){
				$scope.user = {name: resp.name};
			});
			$scope.getPictures();
		};   			
  	});
}]);