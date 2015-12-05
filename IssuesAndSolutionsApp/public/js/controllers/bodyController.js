angular.module('starter.controller').controller('bodyCtrl',function($rootScope,$state,$location,$timeout){
  $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    if(error=="loginrejection")
    {
      //console.log("rejection get")
      $state.go('home')
    }else{
      $state.go('firstPage.login')
    }

  })
})
