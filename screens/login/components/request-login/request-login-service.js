// ----------------------------------
// table of content
// ------------------------------------
//
// validate
//
// ----------------------------------*/
// /*----------------------------------

app.service("requestLoginService", function() {

  this.validate = function($rootScope, scope) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        type: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": $rootScope.locale
        },
        url: API_PATH + "v1/authentication/login",
        data: JSON.stringify(scope.login),
        success: function(response) {
          resolve(response);
        },
        error: function(err) {
          let errors = err.responseJSON.error.flags || {};
          reject(errors);
        }
      });
    });
  };

});
