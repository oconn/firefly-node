define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/auth/session',
    'routers/router',
    'controllers/app_controller',
    'views/user_layout',
    'views/guest_layout'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    SessionLayout,
    AppRouter,
    AppController,
    UserLayout,
    GuestLayout
) {
    'use strict';

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            

            this.addInitializer(function() {
                new AppRouter({controller: new AppController()});
                Backbone.history.start();
            });

            this.addRegions({
                wrapper: "#app-wrapper"
            });

            // check if admin
            if (false) {
                this.wrapper.show(new UserLayout());
            } else {
                this.wrapper.show(new GuestLayout());
            }

            this.start();
        }


    });
    
    return App;
});