'use strict';

angular.module('portalApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/home/index').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
