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

        }    
    });

    return BlogCollectionView;
});