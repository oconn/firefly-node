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

        events: {
            'focus .form input': 'checkField',
            'focus .form textarea': 'checkField'    
        },

        fields: {
            title: {
                el: "#title",
                required: "Please enter a title."
            },
            description: {
                el: "#description",
                required: "Please enter a description."
            },
            body: {
                el: "#body",
                required: "The blog post cannot be blank."
            }
        },

        rules: {
            
        },

        onSubmit: function(evt) {
            evt.preventDefault();
            var that = this;

            var data = this.serializeFormData();
            data.createdAt = Date.now();
            
            this.collection.create(data, {
                success: function(model, res) {
                    // MongoDB error code for duplicate
                    // enteries. Titles cannot be the same
                    if (res.error && res.error.code === 11000) {
                        that.collection.models.shift();
                        that.$el.find('.post-title').addClass('form-error').val('');
                        that.$el.find('.post-title').attr('placeholder', 'Title has already been used');
                    } else {
                        $(that.el).slideUp(1000, function() {
                            that.trigger('close');
                        });
                    }
                },
                error: function() {

                }
            });
        },

        onSubmitFail: function(errors) {
            var that = this;

            _.each(errors, function(error) {
                var field = that.$el.find(error.el);
                field.addClass('form-error');
                field.attr('placeholder', error.error[0]);
            });
        },

        checkField: function(evt) {
            var field = $(evt.currentTarget);
            if (field.hasClass('form-error')) {
                field.removeClass('form-error');
            }
        }

    });

    return NewPostFormView;
});