define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n    <div id=\"top-nav\">\n        <nav>\n            <div id=\"brand\">\n                <a href=\"#\">Firefly Photography</a>\n            </div>\n\n            <div class=\"inline-links\">\n                <ul>\n                    <li><a href=\"#\">About</a></li>\n                    <li><a href=\"#/blog\">Blog</a></li>\n                    <li><a href=\"#\">Gallery</a></li>\n                    <li><a href=\"#\">Contact</a></li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n\n    <div id=\"main\"></div>\n</div>";
  })

});