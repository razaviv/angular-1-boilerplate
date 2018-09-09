# Reference

$rootScope.user = {
  personal_info: {...}
  station: true,
  code: true,
  status: true ,
  type: true,
  permissions: true
}

---

main.js file:
{
  Contain things that are going to be shared in the whole app.
  Using the $rootScope and up and down.
  Functions & methods that are under the $rootScope are always be located in
  this file.
}

screen main .js file {
  Will get $rootScope as an inheritance injected.
  Using $scope to access its components.
}

component main .js file {
  Using scope (without the $) to access its parent.
}
