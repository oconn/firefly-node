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

    var BlogCompositeView = Marionette.CompositeView.extend({
        template: template,
        childView: PostItemView,    

        initialize: function() {
            this.collection.fetch();
        },

        events: {
            'click .create': 'showNew'
        },

        showNew: function() {
            var self = this;

            state.vent.trigger('show:main', new NewPostView({
                collection: self.collection
            }));
        }
    });

    return BlogCompositeView;
});