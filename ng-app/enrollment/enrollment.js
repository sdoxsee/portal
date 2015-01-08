angular.module('enrollment', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('enrollment').config(function($stateProvider) {

    $stateProvider.state('enrollment', {
        url: '/enrollment',
        templateUrl: 'enrollment/partial/enrollment/enrollment.html'
    });
    /* Add New States Above */

});

