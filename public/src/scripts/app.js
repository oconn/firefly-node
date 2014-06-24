define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/app_layout',
    'views/auth/session',
    'controllers/app_controller'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    AppLayout,
    SessionLayout,
    AppController
) {
    'use strict';

    var AppRouter = Backbone.Marionette.AppRouter.extend({
        // "someMethod" must exist at controller.someMethod

        controller: new AppController(),

        appRoutes: {
            "": "showApp",
            "login": "showLogin"
        }
    });

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            
            this.addInitializer(function(){
                this.addRegions({
                    mainView: "#app-wrapper"
                });
            });

            this.addInitializer(function() {
                new AppRouter();
                Backbone.history.start();
            });

            this.start();
        }
    });
    
    return App;
});