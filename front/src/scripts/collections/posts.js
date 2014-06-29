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

        initialize: function() {

        }
    });

    return PostsCollection;
});