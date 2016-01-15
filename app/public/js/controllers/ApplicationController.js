angular.module('esame')
.controller('AppCtrl',['$scope','$http', '$facebook', 'Session', function($scope, $http, $facebook, Session){
	
	$scope.user = null;

	$scope.getPictures = function() {		
		$facebook.api('/me?fields=photos').then(function(resp){
			if(resp) {
				$scope.pictures = resp.data;
				console.log(resp);				
			}else{
				console.log("error");
			}
		});
	};

	//init function
	$scope.$on('$viewContentLoaded', function(){
		if(Session.logged) {
			$facebook.api('/me?fields=id,name,picture').then(function(resp){
				$scope.user = resp;				
			});		
		};   			
	});
}]);