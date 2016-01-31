var webpage = require('webpage');

page = webpage.create();
page.open('blaze.html', function(status) {
    window.setTimeout(function() {
        var content = page.content;
        var bodyStart = content.indexOf("<body>");
        console.log(
          // don't replace myscript with script in head, because there
          // it appears inside another script tag
          content.slice(0, bodyStart),
          // but do so in the body
          content.slice(bodyStart).replace(/myscript/g, "script")
        );
        phantom.exit();
      }, 1000);
  });
