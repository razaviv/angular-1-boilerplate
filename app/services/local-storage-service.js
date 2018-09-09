// ----------------------------------
// table of content
// ------------------------------------
//
// get
// set
// delete
//
// ----------------------------------*/
// /*----------------------------------

app.service("localStorageService", function(parseService) {

  this.get = function(item) {

    // Will return null or the localStorage data after parsed to JSON

    let data = null;
    if (window.localStorage.getItem(item) || window.localStorage.getItem(item)==0)
      data = parseService.parse(window.localStorage.getItem(item))
    return data;

    // get service closure
  };

  this.set = function(item, value) {

    // Will set a new localStorage with name and value
    // Item represents the name of the new localStorage item that will be created

    window.localStorage.setItem(item, value);

    // set service clousre
  };

  this.delete = function(item) {

    // Will delete a localStorage

    window.localStorage.removeItem(item);

    // delete service closure
  };

});
