define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/auth/login'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var LoginView = Marionette.ItemView.extend({
        template: template,

        events: {
            'submit #login-form': 'login'
        },

        login: function(e) {
            e.preventDefault();
        
            var url = 'api/auth/login';
            var formData = {
                email: this.$el.find("#email").val(),
                password: this.$el.find("#password").val()
            };

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

        }
    });

    return LoginView;
});