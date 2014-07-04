define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/blog/index',
    'templates/blog/new',
    'models/post',
    'state',
    //
    'marionette.formview'
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

    var NewPostFormView = Marionette.FormView.extend({
        template: template,

        initialize: function() {
            
        },

        onSubmit: function(e) {
            console.log("dafds")
            e.preventDefault();

            var post = new PostModel({
                title: this.$el.find("#title").val(),
                description: this.$el.find("#description").val(),
                body: this.$el.find("#body").val()
            });
            
            this.collection.add(post);
        }
    });

    return NewPostFormView;
});