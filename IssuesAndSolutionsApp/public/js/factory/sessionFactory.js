angular.module('starter.controller').factory('sessionAvailCheck',function($http,$q){

  return{

    check:function(){
      var defered=$q.defer();
      //console.log("triggered")

      $http.get('/checkSession').success(function(data){
        //console.log(data[0].success)
        if(data[0].success)
        {
          defered.resolve(data);
        }else{
          defered.reject("homerejection");
        }
      }).error(function(err){
        defered.reject("homerejection");
      })
      return defered.promise;
    },
    checkSessionBeforLogin:function(){
      var defered=$q.defer();
      console.log("triggered")

      $http.get('/checkSession').success(function(data){

        if(data[0].success)
        {console.log(data[0].success)
          defered.reject("loginrejection");
        }else{console.log(data[0].success)
          defered.resolve(data);
        }
      }).error(function(err){
         console.log(data[0].success)
        defered.resolve(err);
      })
      return defered.promise;
    }

  }
})
