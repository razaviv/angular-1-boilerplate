app.directive("requestLoginComponent", ($rootScope, requestLoginService, localStorageService, $location) => {
  return {
    templateUrl: "/screens/login/components/request-login/request-login.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.login = {};
      if (ENV=="staging") {
        scope.login = {
          phone: "0509921014",
          password: "rjy9aen2"
        };
      }

      scope.submit = function() {
        scope.loading = true;
        requestLoginService.validate($rootScope, scope).then(response => {
          scope.loading = false;
          $rootScope.user = response.data.user;
          localStorageService.set("auth_token", response.data.user.auth_token);
          if (scope.backto)
            $location.path("/" + scope.backto).search({});
          if (!scope.backto)
            $location.path("/dashboard");
          $rootScope.$digest();
          scope.$apply();
        }).catch(errors => {
          scope.loading = false;
          scope.errors = errors;
          $rootScope.$digest();
          scope.$apply();
        });
      };

    }
  }
});
