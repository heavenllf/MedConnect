(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location','AuthenticationService','$state', 'FlashService'];
    function LoginController($location,AuthenticationService,$state, FlashService) {
        var vm = this;

        vm.login = login;
        vm.register=register;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        function register(){
            $location.path("/register")  ;
        }
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $state.go("app.createOrder");
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
