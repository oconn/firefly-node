define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div id=\"top-nav\">\n        <nav>\n            <div id=\"brand\">\n                <a href=\"#\">Firefly Photography</a>\n            </div>\n\n            <div class=\"inline-links\">\n                <a href=\"#\">About</a>\n                <a href=\"#/blog\">Blog</a>\n                <a href=\"#\">Gallery</a>\n                <a href=\"#\">Contact</a>\n            </div>\n        </nav>\n    </div>\n\n    <div id=\"main\"></div>\n</div>";
  })

});