define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Sign Up</h1>\n\n<form id=\"login-form\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" id=\"email\" /><br>\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" id=\"password\" /><br>\n    <label for=\"password_confirmation\">Password Confirmation</label>\n    <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" />\n    <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<h3>Already a member?</h3>\n<a href=\"#\" id=\"sign-in-show\">Sign In</a>";
  })

});