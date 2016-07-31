/**
 * Created with IntelliJ IDEA.
 * User: libaoxia
 * Date: 16-7-7
 * Time: 下午9:00
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('OrderCreateService', OrderCreateService);

    OrderCreateService.$inject = ['$http'];

    function OrderCreateService($http) {
        var service = {
            dataCache: {},
            sendCheckDataToServer: function() {
                var me = this;
                $http({
                    url: 'CreateOneCheckActor',
                    method: "POST",
                    data: me.dataCache,
                    headers: {'Content-Type': 'application/json;charset=UTF-8'},
                })
                    .then(function(response) {
                            // success
                        },
                        function(response) { // optional
                            // failed
                        }
                );

            },
        };

        return service;

    }

})();