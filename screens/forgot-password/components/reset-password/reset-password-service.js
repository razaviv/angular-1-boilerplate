// ----------------------------------
// table of content
// ------------------------------------
//
// starter
//
// ----------------------------------*/
// /*----------------------------------

app.service("resetPasswordService", function() {

  this.verify = function($rootScope, scope) {

    return new Promise(function(resolve, reject) {

      function validate_user_input() {
        let result = {};
        let flags = {};
        if (!scope.auth.code) flags.code = $rootScope.t['Fill this field'];
        if (!scope.auth.password) flags.password = $rootScope.t['Fill this field'];
        if (!scope.auth.password_repeat) flags.password_repeat = $rootScope.t['Fill this field'];
        if (scope.auth.password && (scope.auth.password.length<7 || scope.auth.password.length>20)) flags.password = $rootScope.t['Invalid password format'];
        if (scope.auth.password_repeat && scope.auth.password_repeat!=scope.auth.password) flags.password_repeat = $rootScope.t['Passwords not match'];
        if (Object.keys(flags).length>0) return reject(flags);
        return resetPassword(result);
      }

      function resetPassword(result) {
        let formData = {
          userId: $rootScope.userId,
          code: scope.auth.code,
          password: scope.auth.password,
          password_repeat: scope.auth.password_repeat
        };
        $.ajax({
          type: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": $rootScope.locale
          },
          url: API_PATH + "v1/authentication/reset-password/",
          data: JSON.stringify(formData),
          success: function(response) {
            $rootScope.errors = {};
            $rootScope.$digest();
            resolve(response);
          },
          error: function(err) {
            let errors = err.responseJSON.error.flags || {};
            reject(errors);
          }
        });
      }

      validate_user_input();

    });

    // verify service closure
  };

});
