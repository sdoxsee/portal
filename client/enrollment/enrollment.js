angular.module('enrollment', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('enrollment').config(function($stateProvider) {

    $stateProvider.state('dashboard', {
        url: '/enrollment/dashboard',
        templateUrl: 'enrollment/partial/dashboard/dashboard.html'
    });
    /* Add New States Above */

});
