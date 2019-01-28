///Reference path="angular.js"///

            var app=angular.module("myModule",[]);
            app.controller("dataController",function($scope,$http)
            { 
            $http.get("records.json").then(function(response)
            {
                $scope.emp=response.data;
            }
            );

            });