window.addEventListener("load", function() {
  // just some boilerplate ...
  window.setTimeout(function() {
    window.scrollTo(0, 1);
  }, 0);
});var MyApp = (function($) {
  var module = {
    init: function init() {
      // initialisation goes here...
    } // module.init()
  };
  
  $(document).ready(module.init);

  return module;
}(jQuery));
