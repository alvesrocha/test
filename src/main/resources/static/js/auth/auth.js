angular.module('auth', []).factory(
	'auth',

	function($rootScope, $http, $location) {

		enter = function() {
			if ($location.path() != auth.loginPath) {
				auth.path = $location.path();
				if (!auth.authenticated) {
					//$location.path(auth.loginPath);
				}
			}
		}

		var auth = {
			authenticated : false,
			roles : { },

			loginPath : '/login',
			logoutPath : '/logout',
			homePath : '/',
			path : $location.path(),

			authenticate : function(credentials, callback) {

				var headers = credentials && credentials.username ? {
					authorization : "Basic "
						+ btoa(credentials.username + ":"
							+ credentials.password)
				} : {};

				$http.get('user', {
					headers : headers
				}).then(function(response) {
					if (response.data.name) {
						auth.authenticated = true;
						angular.forEach(response.data.authorities, function(obj, idx) {
							var authority = obj.authority.toLocaleUpperCase();
							auth.roles[authority] = true;
						});
					} else {
						auth.authenticated = false;
					}
					callback && callback(auth.authenticated);
					$location.path(auth.path == auth.loginPath ? auth.homePath : auth.path);
				}, function() {
					auth.authenticated = false;
					callback && callback(false);
				});

			},

			hasRole : function(role) {
				role = role.toLocaleUpperCase();
				return auth.roles[role];
			},

			hasRoles : function(roles) {
				var has = true;
				roles = roles.split(",");
				angular.forEach(eval(roles), function(role, idx) {
					has = has && auth.hasRole(role);
				});
				return has;
			},

			clear : function() {
				$location.path(auth.loginPath);
				auth.authenticated = false;
				$http.post(auth.logoutPath, {}).then(function() {
					console.log("Logout succeeded");
				}, function() {
					console.log("Logout failed");
				});
			},

			init : function(homePath, loginPath, logoutPath) {

				auth.homePath = homePath;
				auth.loginPath = loginPath;
				auth.logoutPath = logoutPath;

				auth.authenticate({}, function(authenticated) {
					if (authenticated) {
						$location.path(auth.path);
					}
				})

				// Guard route changes and switch to login page if unauthenticated
				$rootScope.$on('$routeChangeStart', function() {
					enter();
				});

			}
		};

		return auth;

	});