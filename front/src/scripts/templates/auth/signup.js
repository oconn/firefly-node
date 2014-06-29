define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<h3>";
  if (helper = helpers.error) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.error); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.error), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<h1>Sign Up</h1>\n\n<form id=\"signup-form\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" id=\"email\" /><br>\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" id=\"password\" /><br>\n    <label for=\"password_confirmation\">Password Confirmation</label>\n    <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" />\n    <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<h3>Already a member?</h3>\n<a href=\"#\" id=\"sign-in-show\">Sign In</a>";
  return buffer;
  })

});