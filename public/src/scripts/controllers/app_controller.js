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
            console.log("Show Login");
        },

        isLoggedIn: function(callback) {
            var url = 'api/auth';
            var that = this;
            $.ajax({
                method: "GET",
                url: url,
                success: function(data, req, res) {
                    callback(data.user);
                },
                error: function(res, status, error) {
                    callback(false);
                }
            });
            return true;
        }
    });

    return AppController;
});