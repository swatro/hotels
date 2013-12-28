'use strict';

angular.module('dadCodeApp')
    .controller('LoginCtrl', function ($scope) {
        $scope.loginMessage="LoginPage";
        $scope.email="";
        $scope.password="";
        $scope.submit= function(){
          console.log("Look up and submit");
        };
    });