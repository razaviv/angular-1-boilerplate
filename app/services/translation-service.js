// ----------------------------------
// table of content
// ------------------------------------
//
// getLocaleTranslationFile
//
// ----------------------------------*/
// /*----------------------------------

app.service("translationService", function() {

  this.getLocaleTranslationFile = function(locale) {

    // Receives required locale - for example en-US or he-IL.
    // The locale was originally created via browser ditection with `navigator`
    // If there a translation.json file for that locale, it will return the file.
    // Otherwise reject with nothing.
    // When pull function receives this reject it will be asking again for
    // this service, but this time with a default locale which is he-IL / en-US
    // It is not decided which is the default locale yet

    return new Promise(function(resolve, reject) {
      try {
        $.ajax({
          type: 'GET',
          url: "/app/locales/" + locale + "/translations.json",
          success: function(response) {
            resolve(response);
          },
          error: function(err) {
            reject();
          }
        });
      }
      catch(err) { reject(); }
    });

    // getLocaleTranslationFile service closure
  };

});
