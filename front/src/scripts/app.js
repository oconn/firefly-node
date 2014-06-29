define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/auth/session',
    'routers/router',
    'controllers/router_controller',
    'views/app_layout'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    SessionLayout,
    AppRouter,
    RouterController,
    AppLayout
) {
    'use strict';

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            
            this.addInitializer(function() {
                new AppRouter({
                    controller: new RouterController()
                });
                Backbone.history.start();
            });

            this.addRegions({
                wrapper: "#app-wrapper"
            });

            // check if user
            if (true) {
    
            } else {

            }

            this.wrapper.show(new AppLayout());

            this.start();
        }


    });
    
    return App;
});