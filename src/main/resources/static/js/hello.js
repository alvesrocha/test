angular
		.module('hello', [ 'ngRoute', 'auth', 'home', 'message', 'form', 'registerUser', 'registerClinic', 'registerDept', 'navigation', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
		.config(

				function($routeProvider, $httpProvider, $locationProvider) {

					$locationProvider.html5Mode(true);

					$routeProvider.when('/', {
						templateUrl : 'js/home/home.html',
						controller : 'home',
						controllerAs : 'controller'
					}).when('/message', {
						templateUrl : 'js/message/message.html',
						controller : 'message',
						controllerAs : 'controller'
					}).when('/login', {
						templateUrl : 'js/navigation/login.html',
						controller : 'navigation',
						controllerAs : 'controller'
					}).when('/form', {
						templateUrl : 'js/form/form.html',
						controller : 'form',
						controllerAs : 'controller'
					}).when('/register', {
						templateUrl : 'js/register/registerUser.html',
						controller : 'registerUser',
						controllerAs : 'controller'
					}).when('/clinic', {
						templateUrl : 'js/register/registerClinic.html',
						controller : 'registerClinic',
						controllerAs : 'controller'
					}).when('/dept', {
						templateUrl : 'js/register/registerDepartment.html',
						controller : 'registerDept',
						controllerAs : 'controller'
					}).otherwise('/');

					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

				}).run(function(auth) {

			// Initialize auth module with the home page and login/logout path
			// respectively
			auth.init('/', '/login', '/logout');

		});
