define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/layout',
    'views/blog/main'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    MainView
) {
    "use strict";

    var BlogLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            main: '#main'
        },

        initialize: function() {
            
        },

        onRender: function() {
            this.main.show(new MainView());
        }
    });

    return BlogLayout;
});