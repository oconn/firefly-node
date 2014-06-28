define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'views/auth/login',
    'views/auth/signup',
    'templates/auth/session'
], function(
    $,
    _,
    Backbone,
    Marionette,
    LoginView,
    SignUpView,
    template
) {
    "use strict";

    var SessionLayout = Marionette.LayoutView.extend({
        
        template: template,
        
        events: {
            'click #sign-up-show': 'showSignUp',
            'click #sign-in-show': 'showSignIn'
        },

        regions: {
            sessionForm: "#session-form"
        },

        initialize: function() {
        
        },

        onRender: function() {
            this.sessionForm.show(new LoginView());
        },

        showSignUp: function() {
            this.sessionForm.show(new SignUpView());
        },

        showSignIn: function() {
            this.sessionForm.show(new LoginView());
        }
    });

    return SessionLayout;
});