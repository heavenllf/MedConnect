angular.module('contacts', ['ngRoute', 'contacts.factory', 'contacts.filters', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../views/p/list.html',
        controller: ListCtrl,
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
