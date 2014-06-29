define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/new'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var NewPostItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {
            
        }
    });

    return NewPostItemView;
});