angular.module('starter.controller').controller('signupCtrl',function($scope,$http,$document,serverCall){

  $scope.signup={};
  $scope.success=false;
  $scope.danger=false;

  $scope.storeData=function(signupForm){

    serverCall.signup({Firstname:$scope.signup.Firstname,Lastname:$scope.signup.Lastname,Email:$scope.signup.Email,Password:$scope.signup.Password},function(result){
      if(result.success)
      {
        $scope.setValues(signupForm);
        $scope.danger=false;
        $scope.success=true;

      }else{
        $scope.danger=true;
        $scope.success=false;
      }
    })
  }

  $scope.setValues=function(signupForm){

    $scope.signup={};
    signupForm.Firstname.$dirty=false;
    signupForm.Lastname.$dirty=false;
    signupForm.Password.$dirty=false;
    signupForm.Email.$dirty=false;
    $scope.today();
    $scope.success=true;
  }

  $scope.close=function(){
    $scope.danger=false;
    $scope.success=false;
  }


  $scope.today = function() {
    $scope.signup.dob = new Date();
  };
  $scope.today();

  $scope.status = {
    opened: false
  };

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

})
