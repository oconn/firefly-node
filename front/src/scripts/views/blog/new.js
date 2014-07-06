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

        fields: {
            title: {
                el: "#title"
            },
            description: {
                el: "#description"
            },
            body: {
                el: "#body"
            }
        },

        //custom validation rules
        rules: {
            
        },

        //handle successful submissions
        onSubmit: function(evt) {
            evt.preventDefault();
        },

        //handle validation failures
        onSubmitFail: function(errors) {

        }

    });

    return NewPostFormView;
});