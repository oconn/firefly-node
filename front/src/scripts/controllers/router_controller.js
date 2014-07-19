define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    // Views,
    'views/home/index',
    'views/blog/layout',
    'views/gallery/layout'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    // Views
    HomeView,
    BlogLayout,
    GalleryLayout
) {
    "use strict";

    var appController = Marionette.Controller.extend({

        initialize: function() {

        },

        index: function() {
            state.vent.trigger('show:main', new HomeView({

            }));
        },

        blog: function() {
            state.vent.trigger('show:main', new BlogLayout());
        },

        gallery: function() {
            state.vent.trigger('show:main', new GalleryLayout());
        }
    });

    return appController;
});