define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    // Views,
    'views/home/index',
    'views/blog/index'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    HomeView,
    BlogView
) {
    "use strict";

    var AppController = Marionette.Controller.extend({

        initialize: function() {

        },

        index: function() {
            state.vent.trigger('show:main', new HomeView());
        },

        blog: function() {
            state.vent.trigger('show:main', new BlogView());
        }
    });

    return AppController;
});