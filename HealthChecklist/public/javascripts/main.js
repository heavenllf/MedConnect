var createOrder=angular.module('createOrder', ['ngRoute', 'ngCookies','ngTable','ui.router']) ;
createOrder.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('app.createOrder', {
        url: '/orderCreate',
        templateUrl: 'orderCreate/orderCreate.html',
        controller: 'OrderCreateController',
        controllerAs: 'vm',
        data: {
            pageTitle: '创建'
        }
    });
    $stateProvider.state('app.queryPatient', {
        url: '/querypatient',
        templateUrl: 'orderList/querypatient.html',
        controller: 'QueryPatientController',
        controllerAs: 'vm',
        data: {
            pageTitle: '查询'
        }
    });
    $stateProvider.state('app.faceSmile', {
        url: '/faceSmile',
        templateUrl: 'orderCreate/faceSmile.html',
        controller: 'FaceSmileController',
        controllerAs: 'vm'
    });
    $stateProvider.state('app.faceStatic', {
        url: '/faceStatic',
        templateUrl: 'orderCreate/faceStatic.html',
        controller: 'FaceStaticController',
        controllerAs: 'vm'
    });
    $stateProvider.state('app.teethCheck', {
        url: '/teethCheck',
        templateUrl: 'orderCreate/teethCheck.html',
        controller: 'TeethCheckController',
        controllerAs: 'vm'
    });
    $stateProvider.state('app.temporomandibularJoint', {
        url: '/temporomandibularJoint',
        templateUrl: 'orderCreate/temporomandibularJoint.html',
        controller: 'OrderTemporomandibularJointController',
        controllerAs: 'vm'
    });
    $stateProvider.state('app.other', {
        url: '/other',
        templateUrl: 'orderCreate/other.html',
        controller: 'OtherController',
        controllerAs: 'vm'
    });
}]);