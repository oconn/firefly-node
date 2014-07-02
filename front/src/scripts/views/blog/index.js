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

    var BlogCollectionView = Marionette.LayoutView.extend({
        childView: PostItemView,    

        initialize: function() {
            this.collection.fetch();
        }    
    });

    return BlogCollectionView;
});