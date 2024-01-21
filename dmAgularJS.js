var app =angular.module('demoapp', [])

app.controller('Ctrl', function($scope, $rootScope)
{
   $scope.Show = function()
   {
    $scope.Fullname =  $scope.First + " " + $scope.Last
   }
})

app.controller('Ctrl2', function ($scope)
{
 
})