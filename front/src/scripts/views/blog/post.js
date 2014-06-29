define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var PostItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {
            
        }
    });

    return PostItemView;
});