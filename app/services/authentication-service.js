// ----------------------------------
// table of content
// ------------------------------------
//
// validate_auth_token
//
// ----------------------------------*/
// /*----------------------------------

app.service("authenticationService", function(localStorageService) {

  this.validate_auth_token = function(locale) {

    return new Promise(function(resolve, reject) {

      function gain_auth_token() {
        let result = {};
        try {
          result.auth_token = localStorageService.get("auth_token");
          if (result.auth_token==null) reject();
          return verify_token(result);
        }
        catch(err) { reject(err); }
      }

      function verify_token(result) {
        $.ajax({
          type: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
            "Authorization": result.auth_token
          },
          url: API_PATH + "v1/authentication/verify-token",
          success: function(response) {
            resolve(response);
          },
          error: function(err) {
            reject(err);
          }
        });
      }

      gain_auth_token();

      // promise closure
    });

    // validate_auth_token service closure
  };

});
