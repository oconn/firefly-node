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
            'click .delete': 'deletePost',
            'click .edit': 'editPost'
        },

        deletePost: function() {
            this.trigger('delete:post', this.model);
        },

        editPost: function() {
            this.trigger('edit:post', this.model);
        }
    });

    return PostItemView;
});