var app = angular.module("appdemo", [])

app.controller("Ctrl", function($scope, $interval, $window )
{
  
  $scope.flogin = false
    $scope.changeLogin = function ()
    {
      $scope.email=" ";
      $scope.pass=" ";
      $scope.flogin = !$scope.flogin
    }
    $scope.sumitLogin= function()
    {
      $scope.flogin = true

    }
})