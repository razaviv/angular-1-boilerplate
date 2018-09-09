app.directive("requestSmsComponent", ($rootScope, requestSmsService) => {
  return {
    templateUrl: "/screens/forgot-password/components/request-sms/request-sms.html",
    scope: true,
    link: function(scope, element, attrs) {

      scope.auth = {};
      if (ENV=="staging") {
        scope.auth = {
          phone: "0509921014"
        };
      }

      // NOTE:
      // requestSms is under $rootScope since its going to be called from
      // different instances.

      $rootScope.requestSms = function() {
        scope.loading = true;
        requestSmsService.ask($rootScope, scope).then(response => {
          $rootScope.errors = false;
          $rootScope.waitingForSMS = true;
          scope.loading = false;
          $rootScope.requested = true;
          $rootScope.userId = response.data.userId;
          scope.$apply();
          $rootScope.$digest();
        }).catch(errors => {
          $rootScope.waitingForSMS = false;
          scope.loading = false;
          $rootScope.errors = errors;
          $rootScope.$digest();
          scope.$apply();
        });
      };

    }
  }
});
