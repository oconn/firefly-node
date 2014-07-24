define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/blog/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    PostView
) {
    "use strict";

    var PostsCollectionView = Marionette.CollectionView.extend({        
        childView: PostView,

        initialize: function() {
            this.listenTo(this, 'childview:delete:post', this.deletePost);
            this.listenTo(this, 'childview:edit:post', this.editPost);
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
        },

        editPost: function(cv, post) {
            this.trigger('edit:post', {model: post});
        }

    });

    return PostsCollectionView;
});