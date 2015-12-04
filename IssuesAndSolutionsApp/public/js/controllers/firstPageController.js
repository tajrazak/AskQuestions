subApp.controller('firstPageCtrl',function($scope,$state,$location,sessionAvailCheck){
  var res=sessionAvailCheck.checkSessionBeforLogin();
  res.then(function(){}).catch(function(){
    $state.go('home')
  })

})
