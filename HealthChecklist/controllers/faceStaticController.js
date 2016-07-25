/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-14
 * Time: 下午9:42
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';
    angular.module('mainapp')
        .controller('FaceStaticController',FaceStaticController);
    FaceStaticController.$inject = [ '$location', '$rootScope'];
    function FaceStaticController( $location, $rootScope) {
        var vm = this;

    }
})();
