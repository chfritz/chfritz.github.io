$('template').each(function(x) {
  console.log("Adding template " + $(this).attr("name"));
  $('head').prepend(
    "<script type=\"text/spacebars\" name=\"" + $(this).attr("name") + "\">"
    + $(this)[0].innerHTML.replace(/{{&gt;/g, "{{>")
    + "</script>"
  );
});
