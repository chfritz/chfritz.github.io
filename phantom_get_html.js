var width = 1024;
var height = 768;
var webpage = require('webpage');

page = webpage.create();
page.viewportSize = {width: width, height: height};
page.open('http://localhost:3000', function(status) {
    window.setTimeout(function() {
        var content = page.content;
        console.log(content);
        page.clipRect = {top: 0, left: 0, width: width, height: height};
        phantom.exit();
      }, 2000);
  });
