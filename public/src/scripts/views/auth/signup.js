define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/auth/signup'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var SignUpView = Marionette.ItemView.extend({
        template: template,

        events: {
            'submit #login-form': 'login'
        },

        login: function(e) {
            e.preventDefault();
        
            var url = 'api/auth/signup';
            var formData = {
                email: this.$el.find("#email").val(),
                password: this.$el.find("#password").val(),
                password_confirmation: this.$el.find("#password_confirmation").val()
            };

            if (formData.password === formData.password_confirmation) {

                $.ajax({
                    url: url,
                    type: "POST",
                    dataType: "JSON",
                    data: formData,
                    success: function(data) {

                    },
                    error: function(error) {

                    }
                });

            } else {
                // TODO 
                // Notify user passwords do not match
            }
        }
    });

    return SignUpView;
});