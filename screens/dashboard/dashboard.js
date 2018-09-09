app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/", {
    templateUrl : "screens/dashboard/dashboard.html"
  })
  .when("/dashboard", {
    templateUrl : "screens/dashboard/dashboard.html"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("dashboard", ($rootScope, $scope, $location) => {

  $rootScope.init().then(function() {
    if ($rootScope.user.type!="guest")
      $scope.screenInit();
    else
     $location.path("/login/").search({backto: "dashboard"});
     $scope.$apply();
  });

  $scope.screenInit = function() {
    $scope.initialized = true;
    $scope.$apply();
  };

  // dashbaord controller closure
});
