(function(){
    'use strict';
    angular
        .module('app')
        .controller('OrderOtherController',OrderOtherController);
    OrderOtherController.$inject = [ '$location', '$rootScope','$scope'];
    function OrderOtherController( $location, $rootScope,$scope) {
        var vm = this;

    }

})();