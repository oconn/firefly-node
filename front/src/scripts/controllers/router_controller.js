define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    // Views,
    'views/home/index',
    'views/blog/index',
    'views/blog/new',
    // Collections
    'collections/posts',
    // Models
    'models/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    // Views
    HomeView,
    BlogView,
    NewPostView,
    // Collections
    PostsCollection,
    // Models
    PostModel
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
            state.vent.trigger('show:main', new BlogView({
                collection: new PostsCollection()
            }));
        },

        newPost: function() {
            state.vent.trigger('show:main', new NewPostView({
                collection: new PostsCollection()
            }));
        }
    });

    return appController;
});