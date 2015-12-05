angular.module('starter.controller').controller('loginCtrl',function($scope,$http,$location,$state,$rootScope,serverCall){
  $scope.login={};
  $scope.submit=function(){

    serverCall.login({username:$scope.login.username,password:$scope.login.password},function(result){
      if(result.success)
      {
        console.log(result)
        $state.go('home');
      }
    })

  }


})
