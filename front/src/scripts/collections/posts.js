define([
    'jquery',
    'underscore',
    'backbone',
    'models/post'
], function(
    $,
    _,
    Backbone,
    PostModel
) {
    "use strict";

    var PostsCollection = Backbone.Collection.extend({
        url: '/api/posts',
        model: PostModel,

        comparator: function(post) {
            var date = new Date(post.get("createdAt"));
            return -date;
        },

        initialize: function() {

        }
    });

    return PostsCollection;
});