define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/blog/index',
    'templates/blog/new',
    'models/post',
    'state'
], function(
    $,
    _,
    Backbone,
    Marionette,
    BlogView,
    template,
    PostModel,
    state
) {
    "use strict";

    var NewPostItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {
            console.log(BlogView);
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
            console.log(BlogView)
            state.vent.trigger('show:main', new BlogView({
                collection: self.collection
            }));
        }
    });

    return NewPostItemView;
});