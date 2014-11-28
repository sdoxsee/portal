angular.module('demo').controller('HomeCtrl',function($scope, $http){

  $http.get('/api/home/index').success(function(awesomeThings) {
    $scope.awesomeThings = awesomeThings;
  });

});
