/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-24
 * Time: 下午10:27
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';
    angular
        .module('mainapp')
        .controller('OrderOtherController',OrderOtherController);
    OrderOtherController.$inject = [ '$location', '$rootScope','$scope'];
    function OrderOtherController( $location, $rootScope,$scope) {
        var vm = this;

    }

})();