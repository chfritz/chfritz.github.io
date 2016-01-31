var page = require('webpage').create();
page.open('blaze.html', function(status) {
    window.setTimeout(function() {
        console.log(page.content.replace(/myscript/g, "script"));
        phantom.exit();
      }, 1000);
  });
