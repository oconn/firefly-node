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

                this.mainView.show(new SessionLayout());
            });

            this.start();
        }

    });
    
    return App;
});