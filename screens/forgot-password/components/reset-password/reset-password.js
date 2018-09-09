app.directive("resetPasswordComponent", ($rootScope, $location, resetPasswordService, localStorageService) => {
  return {
    templateUrl: "/screens/forgot-password/components/reset-password/reset-password.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.auth = {};
      if (ENV=="staging") {
        scope.auth = {
          code: "1234",
          password: "123123123",
          password_repeat: "123123123"
        };
      }

      scope.resetPassword = function() {
        scope.waitingForSMS = false;
        scope.loading = true;
        resetPasswordService.verify($rootScope, scope).then(response => {
          scope.loading = false;
          $rootScope.user = response.data.user;
          localStorageService.set("auth_token", response.data.user.auth_token);
          $rootScope.$digest();
          if (scope.backto) {
            $location.path("/" + scope.backto).search({});
            scope.$apply();
          }
          if (!scope.backto) {
            $location.path("/dashboard");
            scope.$apply();
          }
        }).catch(errors => {
          scope.loading = false;
          $rootScope.errors = errors;
          scope.$apply();
          $rootScope.$digest();
        });
      }

    }
  }
});
