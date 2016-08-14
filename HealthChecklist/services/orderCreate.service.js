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
            dataCache: {checkUID: null},
            sendCheckDataToServer: function() {
                var me = this, action;
                if(me.dataCache.checkUID) {
                    action = 'UpdateOneCheckActor';
                } else {
                    action = 'CreateOneCheckActor';
                }

                $http({
                    url: action,
                    method: 'POST',
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
            getCheckDataFromServer: function(uid) {
                var me = this;
                $http({
                    url: 'GetOneCheckActor',
                    method: 'GET',
                    params: {checkUID: uid},
                    headers: {'Content-Type': 'application/json;charset=UTF-8'},
                })
                    .then(function(response) {
                            // success
                        },
                        function(response) { // optional
                            // failed
                        }
                );
                me.dataCache.checkUID = uid;
            },
        };

        return service;

    }

})();