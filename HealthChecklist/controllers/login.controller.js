(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope','$location','AuthenticationService','$state', 'FlashService'];
    function LoginController($rootScope, $location, AuthenticationService, $state, FlashService) {
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
            AuthenticationService.Login(vm.getUser.Username, vm.getUser.Password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.getUser.Username, vm.getUser.Password);
                    $rootScope.user = vm.getUser.Username;
                    window.checklistLoginOK = true;
                    $state.go("app.createOrder");
                } else {
                    alert(response.message);
                    // FlashService.Error(response.message);
                    // vm.dataLoading = false;
                }
            });
        };
    }

})();
