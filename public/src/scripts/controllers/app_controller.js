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

    var AppController = Marionette.Controller.extend({

        initialize: function() {

        },

        showApp: function() {
            this.isLoggedIn();
        },

        showLogin: function() {
            console.log("Showing Login")
        },

        isLoggedIn: function(callback) {
            var that = this;

            var url = 'api/auth';
            $.ajax({
                method: "GET",
                url: url,
                success: function(data, req, res) {

                },
                error: function(res, status, error) {

                }
            });
            return true;
        }
    });

    return AppController;
});