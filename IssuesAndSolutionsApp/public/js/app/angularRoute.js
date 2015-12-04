subApp.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state('firstPage',{
    url:'/firstPage',
    templateUrl:'templates/firstLandPage.html',
    controller:'firstPageCtrl',
    resolve:{
      check:function(sessionAvailCheck){
        return sessionAvailCheck.checkSessionBeforLogin()
      }
    }
  })
  .state('firstPage.login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginCtrl'
  })
  .state('firstPage.signup',{
    url:'/signup',
    templateUrl:'templates/signup.html',
    controller:'signupCtrl'
  })
  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
    controller:'homeCtrl',
    resolve:{
      check:function(sessionAvailCheck){
        return sessionAvailCheck.check()
      }
    }
  })
  .state('profile',{
    url:'/profile',
    templateUrl:'templates/profile.html',
    controller:'profileCtrl',
    resolve:{
      check:function(sessionAvailCheck){
        return sessionAvailCheck.check()
      }
    }
  });

  $urlRouterProvider.otherwise('firstPage');

})
