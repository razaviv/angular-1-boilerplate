// ----------------------------------
// table of content
// ------------------------------------
//
// starter
//
// ----------------------------------*/
// /*----------------------------------

app.service("requestSmsService", function() {

  this.ask = function($rootScope, scope) {

    return new Promise(function(resolve, reject) {

      $.ajax({
        type: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": $rootScope.locale
        },
        url: API_PATH + "v1/authentication/request-sms/" + scope.auth.phone,
        success: function(response) {
          resolve(response);
        },
        error: function(err) {
          let errors = err.responseJSON.error.flags || {};
          reject(errors);
        }
      });

    });

    // starter service closure
  };

});
