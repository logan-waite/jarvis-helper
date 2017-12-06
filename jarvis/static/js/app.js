var app = angular.module('jarvis', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	var appBase = app.appBase = 'static/js/pages/';
	$locationProvider.html5Mode(false);

	$routeProvider
	.when("/", {
		templateUrl: appBase + 'index.html',
		controller: "IndexCtrl",
	})
	.otherwise({
		redirectTo: '/'
	})
}]);

jQuery(document).ready(function() {
	// $.ajax({
	// 	url: "/api/dashboard/accountInfo",
	// 	method: "GET",
	// 	success: function(result) {
	// 		console.log(result);
	// 	}
	// })
});
