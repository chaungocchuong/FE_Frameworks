var app = angular.module('Lab5-them', [])

app.controller('Ctrl', function($scope)
{
    // xử lý button login
   $scope.clicklogin = false

   $scope.ShowLogin = function()
   {
      $scope.clicklogin = !$scope.clicklogin
   }
   
   $scope.ShowForm = function()
   {
    $scope.clicklogin = !$scope.clicklogin
   }


    // xử lý Status
    $scope.status ="New"
    $scope.Newstatus=""
    $scope.Showstatus = function()
    {
        $scope.status = $scope.Newstatus
    }

    $scope.products = [
        {
            name: 'ip19',
            img: 'https://media.extra.com/s/aurora/00192416_800/Apple-iPhone-7-32GB-FaceTime-Black?locale=en-GB,en-*,*'
        },
        {
            name: 'ip20',
            img: 'https://media.extra.com/s/aurora/00192416_800/Apple-iPhone-7-32GB-FaceTime-Black?locale=en-GB,en-*,*'
        },
        {
            name: 'ip21',
            img: 'https://media.extra.com/s/aurora/00192416_800/Apple-iPhone-7-32GB-FaceTime-Black?locale=en-GB,en-*,*'
        },
        {
            name: 'ip22',
            img: 'https://media.extra.com/s/aurora/00192416_800/Apple-iPhone-7-32GB-FaceTime-Black?locale=en-GB,en-*,*'
        }
    ]
})