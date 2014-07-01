define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/new',
    'models/post',
    'views/blog/index',
    'state'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    PostModel,
    BlogView,
    state
) {
    "use strict";

    var NewPostItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {

        },

        events: {
            'submit #post-form': 'submit'
        },

        submit: function(e) {
            e.preventDefault();
            var self = this;

            var post = new PostModel({
                title: this.$el.find("#title").val(),
                description: this.$el.find("#description").val(),
                body: this.$el.find("#body").val()
            });
            
            post.save();

            state.vent.trigger();
        }
    });

    return NewPostItemView;
});