/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-14
 * Time: 下午9:37
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';
    angular
        .module('mainapp')
        .controller('OtherController',OtherController);
    OtherController.$inject = [ '$location', '$rootScope'];
    function OtherController( $location, $rootScope) {
        var vm = this;

    }

})();
