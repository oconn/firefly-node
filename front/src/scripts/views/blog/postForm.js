define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/blog/index',
    'templates/blog/form',
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
            'focus .form textarea': 'checkField',
            'click .back': 'goBack'        
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

            this.model.save(data, {
                success: function(model, res, options) {
                    // MongoDB error code for duplicate
                    // enteries. Titles cannot be the same
                    if (res.error && res.error.code === 11000) {
                        that.$el.find('.post-title').addClass('error').val('');
                        that.$el.find('.post-title').prev().addClass('error');
                        that.$el.find('.post-title').attr('placeholder', 'Title has already been used');
                    } else {
                        if (model.isNew()) {
                            model.set('_id', true);
                            that.collection.unshift(model);
                        }
                        that.trigger('close:form');
                    }
                },
                error: function(model, response, options) {

                }
            });
        },

        onSubmitFail: function(errors) {
            var that = this;

            _.each(errors, function(error) {
                var field = that.$el.find(error.el);
                field.prev().addClass('error');
                field.addClass('error');
                field.attr('placeholder', error.error[0]);
            });
        },

        checkField: function(evt) {
            var field = $(evt.currentTarget);
            if (field.hasClass('error')) {
                field.removeClass('error');
                field.prev().removeClass('error');
            }
        },

        goBack: function() {
            this.trigger('close:form');    
        }

    });

    return NewPostFormView;
});