angular.module('esame')
.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		redirectTo: '/landing'
	});

	$routeProvider.when('/landing', {
		templateUrl: '/templates/pages/login/index.html',
		controller: 'loginCtrl'
	});

	$routeProvider.when('/home', {
		templateUrl: '/templates/pages/home/index.html',
		controller: 'AppCtrl',
		access: {
			requiresLogin: true
		}
	});

}]);