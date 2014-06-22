define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/app_layout',
    'views/auth/session'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    AppLayout,
    SessionLayout
) {
    'use strict';

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            var self = this;
            
            this.addInitializer(function(){
                this.addRegions({
                    mainView: "#app-wrapper"
                });

                // Checks if user is already logged in on init
                this.isLoggedIn(function(user){
                    if (user) {
                        self.mainView.show(new AppLayout());
                    } else {
                        self.mainView.show(new SessionLayout());
                    }
                });
            });

            this.start();
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
    
    return App;
});