define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var PostItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        events: {
            'click .delete': 'deletePost'
        },

        deletePost: function() {
            this.trigger('deletePost', this.model);
        }
    });

    return PostItemView;
});