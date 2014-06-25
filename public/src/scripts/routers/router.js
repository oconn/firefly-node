define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette'
], function( 
    $,
    _,
    Backbone,
    Marionette
) {
    'use strict';

    var AppRouter = Backbone.Marionette.AppRouter.extend({
        // "someMethod" must exist at controller.someMethod
        
        appRoutes: {
            "login": "showLogin"
        },

        routes: {
            "": "checkUserAuth"
        },

        checkUserAuth: function() {
            var that = this;
            var url = 'api/auth';

            $.ajax({
                method: "GET",
                url: url,
                success: function(data, req, res) {
                    if (data.user) {
                        // User is authenticated

                    } else {
                        // User is not authenticated
                        that.navigate('login', {trigger: true})
                    }
                },
                error: function(res, status, error) {
                    that.navigate('login', {trigger: true})
                }
            });
        }
    });

    return AppRouter;
});