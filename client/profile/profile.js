angular.module('profile', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('profile').config(function($stateProvider) {

    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'profile/partial/profile/profile.html'
    });
    /* Add New States Above */

});

