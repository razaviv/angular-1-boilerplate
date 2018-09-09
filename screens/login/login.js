app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/login", {
    templateUrl : "screens/login/login.html"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("login", ($rootScope, $scope, $location, $routeParams) => {

  $rootScope.init().then(function() {
    if ($rootScope.user.type=="guest")
      $scope.screenInit();
    else
     $location.path("/");
     $scope.$apply();
  });

  $scope.screenInit = function() {
    $scope.backto = $routeParams.backto;
    $scope.initialized = true;
    $scope.$apply();
  };

  // dashboard controller closure
});
