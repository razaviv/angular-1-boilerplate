// ----------------------------------
// table of content
// ------------------------------------
//
// parse
//
// ----------------------------------*/
// /*----------------------------------

app.service("parseService", function() {

  this.parse = function(str) {

    // Will return the str as a JSON object, and if its not a valid
    // JSON encoded, so it will just return it as is (String)
    // Using try and catch will prevent causing error

    try {
      return JSON.parse(str);
    }
    catch(err) { return str; }

    // parse service closure
  };

});
