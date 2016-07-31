
(function () {
    'use strict';

    angular
        // .module('app', ['ngRoute', 'ngCookies','ngTable','ui.router'])
        .module('app', ['ngRoute', 'ngCookies','ngTable','ui.router','createOrder'])
        .config(config)
        .constant('appSettings', appConfig)
        .run(run);

    // config.$inject = ['$routeProvider', '$locationProvider', '$stateProvider','$urlRouteProvider'];
    // function config($routeProvider, $locationProvider,$stateProvider) {
    config.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider'];
    function config($locationProvider,$stateProvider,$urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'app.html',
                controller: 'AppController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Login'
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: 'register/register.html',
                controller: 'RegisterController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Login'
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Login'
                }
            });
            $urlRouterProvider.otherwise('login');

        }

        run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
        function run($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in and trying to access a restricted page
                /* var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                 var loggedIn = $rootScope.globals.currentUser;
                 if (restrictedPage && !loggedIn) {
                 $location.path('/login');
                 }  */
            });
        }

})();