var app = angular.module('demoapp', [])

app.controller('controller_demo', function($scope){
  $scope.user={
    name: "chau ngoc chuong",
    age: "19",
    method: "dep trai vl",
    address: "thon tinh son, tam my tay, nui thanh, quang nam",
    major: "information technology"
  }
})