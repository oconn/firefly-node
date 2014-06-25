define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/app_layout',
    'views/auth/session',
    'routers/router',
    'controllers/app_controller'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    AppLayout,
    SessionLayout,
    AppRouter,
    AppController
) {
    'use strict';

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            
            this.addInitializer(function(){
                this.addRegions({
                    mainView: "#app-wrapper"
                });
            });

            this.addInitializer(function() {
                new AppRouter({controller: new AppController()});
                Backbone.history.start();
            });

            this.start();
        }
    });
    
    return App;
});