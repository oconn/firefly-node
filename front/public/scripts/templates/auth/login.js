define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Login</h1>\n\n<form id=\"login-form\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" id=\"email\" /><br>\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" id=\"password\" />\n    <input type=\"submit\" value=\"Login\">\n</form>\n\n<h3>Not Signed Up?</h3>\n<a href=\"#\" id=\"sign-up-show\">Get Started</a>";
  })

});