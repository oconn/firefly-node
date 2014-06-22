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
            
            this.addInitializer(function(){
                this.addRegions({
                    mainView: "#app-wrapper"
                });

                // Checks if user is already logged in
                
                this.isLoggedIn(function(user){
                    if (user) {
                        this.mainView.show(new AppLayout());
                    } else {
                        this.mainView.show(new SessionLayout());
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
                    callback(data);
                },
                error: function(res, status, error) {
                    callback({user: false});
                }
            });
            return true;
        }

    });
    
    return App;
});