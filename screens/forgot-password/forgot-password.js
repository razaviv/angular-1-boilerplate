app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/forgot-password", {
    templateUrl : "screens/forgot-password/forgot-password.html"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("forgotPassword", ($rootScope, $scope, $location, $routeParams) => {

  $scope.init().then(function() {
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

});
