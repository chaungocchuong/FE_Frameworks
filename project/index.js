var app = angular.module('demoapp', [])
app.controller('Ctrl', function($scope)
{
   $scope.dataView = [
   ]
 $scope.card = [
    {title: 'thanhtruc.vn', name: 'chau ngoc chuong'},
    {title: 'thanhtruc.vn', name: 'chau ngoc anh'},
    {title: 'thanhtruc.vn', name: 'chau ngoc truc'},
    {title: 'thanhtruc.vn', name: 'chau ngoc chi'},
    {title: 'thanhtruc.vn', name: 'chau ngoc uyen'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 1'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 2'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 3'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 4'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 5'},
    {title: 'thanhtruc.vn', name: 'chau ngoc 6'},
 ]


 $scope.request = function ()
 {
   for (var i = 0; i<card.length; i++)
   {
      var pages = card.slice(0,3)
    $scope.dataView.push(pages)
   }
 }

})