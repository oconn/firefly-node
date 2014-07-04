define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    // Views,
    'views/home/index',
    'views/blog/layout',
    'views/blog/new',
    // Collections
    'collections/posts'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    // Views
    HomeView,
    BlogLayout,
    NewPostView,
    // Collections
    PostsCollection
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

        newPost: function() {
            state.vent.trigger('show:main', new NewPostView({
                collection: new PostsCollection()
            }));
        }
    });

    return appController;
});