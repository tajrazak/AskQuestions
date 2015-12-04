module.exports=[

  {
    method:"get",
    url:"/",
    controller:"initialLoadPage.js",
    action:"landingPage"
  },
  {
    method:'post',
    url:'/login',
    controller:'loginController.js',
    action:'loginPage'
  },
  {
    method:'post',
    url:'/signup',
    controller:'signupController.js',
    action:'signup'

  },
  {
    method:'get',
    url:'/checkSession',
    controller:'checkSessionController.js',
    action:'checkSession'
  },
  {
    method:'get',
    url:'/sessionLogout',
    controller:'logoutSession.js',
    action:'sessionLogout'
  }

]
