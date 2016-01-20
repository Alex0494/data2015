angular.module('esame')
.controller('AppCtrl',['$scope','$http', '$facebook', '$cookies', function($scope, $http, $facebook, $cookies){
	
	//fb configurations
	$scope.user = null;
	$scope.pictures = {};
	$scope.geoPictures = [];

	//google maps configuration
	$scope.map = undefined;
	$scope.markers = [];

	$scope.initMap = function() {
		$scope.map = {
			center: {
				latitude: $scope.geoPictures[0].place.location.latitude,
				longitude: $scope.geoPictures[0].place.location.longitude
				},
			zoom: 6
		};		
		//init markers
		for(i in $scope.geoPictures) {
			var marker = {
				id: i,
				coords: {
					latitude: $scope.geoPictures[i].place.location.latitude,
					longitude: $scope.geoPictures[i].place.location.longitude
				},
				icon: $scope.geoPictures[i].picture
			};
			$scope.markers.push(marker);				
		}
	};

	$scope.init = function() {
			//init user informations
			$facebook.api('/me?fields=id,name,picture.type(large)').then(function(resp){				
				$scope.user = resp;				
			});
			//init uploaded pictures
			$facebook.api('me/photos?type=uploaded&fields=from,album,images,picture,place&limit=30').then(function(resp){
				if(resp) {				
					$scope.pictures = resp.data;									
				}else{
					console.log("error");				
				}
			});
			//init geo pictures
			$facebook.api('me/photos?fields=from,album,images,picture,place&limit=30').then(function(resp){
				if(resp) {					
					for(i in resp.data) {						
						if(resp.data[i].place) {
							$scope.geoPictures.push(resp.data[i]);							
						}						
					};					
					//init map						
					$scope.initMap();						
				}else{
					console.log("error");				
				}
			});			
		};

	//init function
	$scope.$on('$viewContentLoaded', function(){
		var session = JSON.parse($cookies.get('session'));		
		if(session.accessToken) {					
			$scope.init();	
		};	

	});
}]);