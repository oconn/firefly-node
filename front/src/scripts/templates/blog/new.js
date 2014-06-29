define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form id=\"post-form\" action=\"/api/posts\" method=\"POST\">\n    <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" /><br>\n    <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"></textarea><br>\n    <textarea name=\"body\" id=\"body\" cols=\"30\" rows=\"10\"></textarea><br>\n    <input type=\"submit\">\n</form>";
  return buffer;
  })

});