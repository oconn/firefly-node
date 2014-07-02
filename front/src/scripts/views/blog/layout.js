define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/layout',
    'views/blog/post',
    'state',
    'views/blog/new',
    'collections/posts',
    'models/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    PostItemView,
    state,
    NewPostView,
    PostsCollection,
    PostModel
) {
    "use strict";

    var BlogLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            postList: '#post-list'
        },

        events: {
            'click .create': 'showNew'
        },

        initialize: function() {
        
        },

        afterRender: function() {
            this.postList.show()
        },

        showNew: function() {
            var self = this;

        }
    });

    return BlogLayout;
});