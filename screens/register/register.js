app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/register", {
    templateUrl : "screens/register/register.html"
  });
  // $locationProvider.html5Mode(true);
});

// $scope.init is a base function located in the app/main directory
// from this script we run this as a remote method to reveal the user
// identify, if its a guest / member and grant their accesses respectively
// Since this page is restricted for guests only, a user WHICH IS a
// member, will be moved to the / screen

// $scope.screenInit method initializing and combining the screen and all of its methods

app.controller("register", ($scope, $location) => {

  $scope.init().then(function() {
    if ($scope.main.by.userType!="guest")
      $location.path("/");
    else
     $scope.screenInit();
  });

  $scope.screenInit = function() {
    $scope.initialized = true;
    $scope.$apply();
  };

  // dashboard controller closure
});
