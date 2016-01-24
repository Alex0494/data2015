angular.module('esame')
.controller('loginCtrl', ['$scope', '$http','$facebook','$location', '$cookies',function($scope, $http, $facebook, $location, $cookies){

	$scope.login = function() {

		//if($cookies.get('session'))
		if(1 == 0) {			
			console.log('I have a valid user access token in memory!');
			//Session.logged = true;
			console.log($facebook.getLoginStatus());
			console.log($cookies.get('session'));
			$location.path('/home');
		} else {
			$facebook.login().then(function(resp) {
				if(resp.status === "connected") {
				//Session.init(resp);
				//creare il cookie che mi salva la sessione
				var expireDate = new Date();
				$cookies.putObject('session', resp.authResponse, [{'expires': expireDate.getDate() + 1}]);				
				$location.path('/home');
			} else {
				$scope.error = "There was an error connecting to your facebook account";
			}			
		}, function(error){
			console.log(error)
			alert("An error occurred contacting the server");
			$location.path('/landing');
		});
		};		
	};

	$scope.logout = function() {
		$facebook.logout().then(function(){
			//TODO: distruggere i cookies della sessione
			$location.path('/');			
			window.location.reload();
		});
	};	
	
}]);



