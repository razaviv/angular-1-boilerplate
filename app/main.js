// ----------------------------------
// TABLE OF CONTENTS
// ------------------------------------
//
// init
// changeLocale
//
// ----------------------------------*/
// /*----------------------------------

app.controller("main", ($rootScope, $scope, translationService, authenticationService) => {

  // Retrieve user's information
  $rootScope.init = function() {

    return new Promise(function(resolve, reject) {

      function scopeInit() {
        $rootScope.locale = navigator.language;
        $rootScope.user = {
          type: "guest"
        };
        return getLocaleTranslationFile();
      }

      function getLocaleTranslationFile() {
        translationService.getLocaleTranslationFile($rootScope.locale).then(function(response) {
          $rootScope.t = response;
          return validate_auth_token();
        }).catch(function() {
          translationService.getLocaleTranslationFile("he-IL").then(function(response) {
            $rootScope.locale = "he-IL";
            $rootScope.t = response;
            return validate_auth_token();
          });
        });
      }

      function validate_auth_token() {
        authenticationService.validate_auth_token($rootScope.locale).then(function(response) {
          $rootScope.user = response.data.user;
          resolve();
        }).catch(function() {
          resolve();
        });
      }

      scopeInit();

      // promise closure
    });

    // scope.init closure
  };

  // Change site language
  $rootScope.changeLocale = function(locale) {

    // We can change locale at anytime, without refreshing the user's browser

    translationService.getLocaleTranslationFile(locale).then(function(response) {
      // If the required locae is found - we gonna use it
      $rootScope.main.locale = locale;
      $rootScope.t = response;
      $rootScope.$digest();
    }).catch(function() {
      translationService.getLocaleTranslationFile("he-IL").then(function(response) {
        // If NOT - we going to use the default locale
        $rootScope.main.locale = "he-IL";
        $rootScope.t = response;
        $rootScope.$digest();
      });
    });
  };

});
