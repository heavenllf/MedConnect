(function () {
    'use strict';

    angular
        .module('mainapp', ['ngRoute', 'ngCookies','ngTable','ui.router'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider','$stateProvider','$urlRouterProvider', '$locationProvider'];
    function config($routeProvider, $stateProvider,$urlRouterProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'OrderCreateController',
                templateUrl: 'orderCreate/orderCreate.html',
                controllerAs: 'vm'
            })
            .when('/list', {
                controller: 'OrderListController',
                templateUrl: 'orderList/orderList.html',
                controllerAs: 'vm'
            })
            .when('/faceSmile', {
                controller: 'FaceSmileController',
                templateUrl: 'orderCreate/faceSmile.html',
                controllerAs: 'vm'
            })
            .when('/faceStatic',{
                controller:'FaceSmileController',
                templateUrl:'orderCreate/faceStatic.html',
                controllerAs:'vm'

            })
            .when('/teethCheck',{
                controller:'TeethCheckController',
                templateUrl:'orderCreate/teethCheck.html',
                controllerAs:'vm'

            })
            .when('/temporomandibularJoint',{
                controller:'OrderTemporomandibularJointController',
                templateUrl:'orderCreate/temporomandibularJoint.html',
                controllerAs:'vm'

            })
            .when('/other',{
                controller:'OtherController',
                templateUrl:'orderCreate/other.html',
                controllerAs:'vm'
            })
            .when('/querypatient', {
                controller: 'QueryPatientController',
                templateUrl: 'orderList/querypatient.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
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