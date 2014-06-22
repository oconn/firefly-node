define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/layout'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var AppLayout = Marionette.LayoutView.extend({
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
                    console.log(data);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
    });

    return AppLayout;
});