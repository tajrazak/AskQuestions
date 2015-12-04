subApp.factory('serverCall',function($resource){
  return $resource('http://localhost:3000',{},{
    'login':{
      url:'/login',
      method:'POST'
    },
    'signup':{
      url:'/signup',
      method:'POST'
    },
    'logoutSession':{
      url:'/sessionLogout',
      method:'GET'
    }
  })
})
