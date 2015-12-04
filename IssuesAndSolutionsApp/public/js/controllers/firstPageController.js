subApp.controller('firstPageCtrl',function($scope,$state,$location,sessionAvailCheck){
  var res=sessionAvailCheck.checkSessionBeforLogin();
  res.then(function(){
    $state.go('firstPage.login')
  }).catch(function(){
    $state.go('home')
  })

})
