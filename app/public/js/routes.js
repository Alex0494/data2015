angular.module('esame')
.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		redirectTo: '/login'
	});

	$routeProvider.when('/login', {
		templateUrl: '/templates/pages/login/index.html',
		controller: 'loginCtrl'
	});

	$routeProvider.when('/home', {
		templateUrl: '/templates/pages/home/index.html',
		controller: 'AppCtrl'
	});

}]);