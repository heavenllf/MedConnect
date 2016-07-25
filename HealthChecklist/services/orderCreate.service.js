/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-7
 * Time: 下午9:00
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    angular
        .module('mainapp')
        .factory('OrderCreateService', OrderCreateService);

    OrderCreateService.$inject = ['$http'];
    function OrderCreateService($http) {
        var service = {
            checkDataCache: {},
            sendCheckDataToServer: function () {
                var me = this;
                me.checkDataCache;

            },
        };

        return service;

    }

})();

