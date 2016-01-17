angular.module('esame')
.controller('AppCtrl',['$scope','$http', '$facebook', 'Session', function($scope, $http, $facebook, Session){
	
	$scope.user = null;
	$scope.pictures = {};
	$scope.geoPictures = [];


	$scope.getPictures = function() {	
		console.log("getting pictures");		
		
	};

	//init function
	$scope.$on('$viewContentLoaded', function(){
		if(Session.logged) {

			//init user informations
			$facebook.api('/me?fields=id,name,picture.type(large)').then(function(resp){
				$scope.user = resp;				
			});

			//init uploaded pictures
			$facebook.api('me/photos?type=uploaded&fields=from,album,images,place&limit=30').then(function(resp){
				if(resp) {				
					$scope.pictures = resp.data;
					console.log(resp);					
				}else{
					console.log("error");				
				}
			});

			//init geo pictures
			$facebook.api('me/photos?fields=from,album,images,place&limit=30').then(function(resp){
				if(resp) {					
					for(i in resp.data) {						
						if(resp.data[i].place) {
							$scope.geoPictures.push(resp.data[i]);
						}						
					}
					console.log($scope.geoPictures);					
				}else{
					console.log("error");				
				}
			});
		};   			
	});
}]);