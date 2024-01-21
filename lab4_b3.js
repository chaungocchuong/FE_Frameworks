var app = angular.module('Lab4-b3', [])

app.controller("Ctr1", function($scope)
{
    $scope.student = [
        {
            name: "chau ngoc chuong",
            age: 19,
            birthday:"21-09-04",
            address: "Nui Thanh, Quang Nam",
            mark: 9.5
        },
        {
            name: "Tran Thuy Linh",
            age: 19,
            birthday:"01-05-04",
            address: "Nui Thanh, Quang Nam",
            mark: 9
        },
        {
            name: "Nguyen Thanh Truc",
            age: 19,
            birthday:"23-07-04",
            address: "Nui Thanh, Quang Nam",
            mark: 9.5
        },
        {
            name: "Nguyen Ngoc Thuy Chi",
            age: 19,
            birthday:"21-05-04",
            address: "Nui Thanh, Quang Nam",
            mark: 8.5
        }
    ]
})