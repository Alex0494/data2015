angular.module('esame')
.directive('navbar', function(){
	return{
		restrict: "E",
		templateUrl: "/templates/directives/navbar.html",
		scope: {
			titles: "@"
		}
	}
});