define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/layout',
    'state',
    'views/blog/index',
    'views/blog/new',
    'collections/posts',
    'models/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    state,
    PostIndexView,
    NewPostView,
    PostsCollection,
    PostModel
) {
    "use strict";

    var BlogLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            postList: '#post-list',
            newPost: '#new-post'
        },

        events: {
            'click .create': 'showNew'
        },

        initialize: function() {
            this.listenTo(this, 'newPost:postAdd', this.postAdd);
            this.postsCollection = new PostsCollection();
            this.postsCollection.fetch();
        },

        onRender: function() {
            var that = this;
            this.postList.show(new PostIndexView({collection: that.postsCollection}));
        },

        showNew: function() {
            var that = this;
            this.newPost.show(new NewPostView({collection: that.postsCollection}));
        }
    });

    return BlogLayout;
});