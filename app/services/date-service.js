// ----------------------------------
// table of content
// ------------------------------------
//
// convert_slash_month_day_year_to_year_month_day_dash
// getDate
//
// ----------------------------------*/
// /*----------------------------------

app.service("dateService", function() {

  this.convert_slash_month_day_year_to_year_month_day_dash = function(date) {

    // 12/23/xxxx will be xxxx-12-23

    try {
      date = date.split("/");
      date = date[2] + "-" + date[0] + "-" + date[1];
      return date;
    }
    catch(err) { return null; }

    // convert_slash_month_day_year_to_year_month_day_dash service closure
  };

  this.getDate = function(which) {

    // If requested day   - will return 01-31;
    // If requested month - will return 01-12 (default js month was increased +1);
    // If requested year  - will return xxxx;
    // If requested ful   - will return xxxx-month(01-12)-day(01-31)

    try {
      switch(which) {
        case "year":
          return new Date().getFullYear();
          break;
        case "month":
          if (new Date().getMonth()+1<10) return "0" + new Date().getMonth()+1;
          return new Date().getMonth()+1;
          break;
        case "day":
          if (new Date().getDate()<10) return "0" + new Date().getDate();
          return new Date().getDate();
          break;
        case "full":
          let n = new Date();
          let year = n.getFullYear();
          let month;
          if (n.getMonth()+1<10) month = "0" + n.getMonth()+1;
          else month = n.getMonth()+1;
          let day;
          if (n.getDate()<10) day = "0" + n.getDate();
          else day = n.getDate();
          return year + "-" + month + "-" + day;
      }
    }
    catch(err) { return null; }

    // getDate service closure
  };

});
