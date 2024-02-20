var app =angular.module('demoapp', [])

app.controller('Ctrl', function($scope, )
{
  var Checkme = false
  $scope.Check= function()
  {
    $scope.CheckmeOut = !$scope.Checkme
  }


  $scope.questions = [
    {
      key: "Người mà bạn ấn tượng nhất tên là gì?",
    },
    {
      key: "Mẹ bạn tên gì?",
    },
    {
      key: "Bạn Sống ở đâu?",
    },
    {
      key: "Bạn học trường nào?",
    },
    {
      key: "Hôm nay bạn thế nào?",
    },
  ];




});


