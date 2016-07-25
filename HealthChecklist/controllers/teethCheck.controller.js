/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-24
 * Time: 下午10:28
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';
    angular
        .module('mainapp')
        .controller('TeethCheckController',TeethCheckController);
    TeethCheckController.$inject = [ '$location', '$rootScope','$scope'];
    function TeethCheckController( $location, $rootScope,$scope) {
        var vm = this;

    }

})();