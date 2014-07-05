define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/index',
    'views/blog/post',
    'state',
    'views/blog/new',
    'collections/posts'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    PostItemView,
    state,
    NewPostView,
    PostsCollection
) {
    "use strict";

    var BlogCollectionView = Marionette.CollectionView.extend({
        childView: PostItemView,    

        initialize: function() {
            this.listenTo(this, 'childview:deletePost', this.deletePost);
        },

        deletePost: function(cv, post) {
            if (confirm("Are you sure you want to delete this post?")) {
                post.destroy({
                    success: function(model, res, options) {

                    },
                    error: function(model, res, options) {

                    }
                });
            } 
        }
    });

    return BlogCollectionView;
});