angular.module('enrollment')
  .controller('DashboardCtrl', function($scope, $http){

  var result = {};

  $http.get('/api/home/index').success(function(result) {
    $scope.result = result;
  });

});
