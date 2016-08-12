(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$http', 'UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController($http, UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.cancel=cancel;
        function cancel(){
            $location.path("/login")  ;
        }
        vm.register = function() {
            $http({
                url: 'RegisterActor',
                method: 'POST',
                data: vm.setUser,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
            .then(function(response) {
                if (response.success) {
                    FlashService.Success('用户注册成功！', true);
                    $location.path('/login');
                } else {
                    FlashService.Error(response.message);
                }
            });

            // vm.dataLoading = true;
            // UserService.Create(vm.setUser)
            //     .then(function (response) {
            //         if (response.success) {
            //             FlashService.Success('Registration successful', true);
            //             $location.path('/login');
            //         } else {
            //             FlashService.Error(response.message);
            //             vm.dataLoading = false;
            //         }
            //     });
        }
    }

})();
