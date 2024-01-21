var app = angular.module('Lab4-b4', [])

app.controller('Ctrl1', function($scope)
{
    $scope.Output = function() {
        var a = parseInt($scope.Chieudai);
        var b = parseInt($scope.Chieurong);
        $scope.Dientich = a * b;
        $scope.Chuvi = (a + b) * 2;
    };
})