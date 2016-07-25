/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-14
 * Time: 下午8:51
 * To change this template use File | Settings | File Templates.
 */
(function(){
    'use strict';

    angular
        .module('mainapp')
        .controller('FaceSmileController', FaceSmileController);

    FaceSmileController.$inject = [ '$location', '$rootScope'];
    function FaceSmileController( $location, $rootScope) {
        var vm = this;

    }
}) ();
