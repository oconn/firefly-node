define([
    'jquery',
    'underscore',
    'backbone', 
    'marionette',
    'views/app_layout'
], function( 
    $,
    _,
    Backbone,
    Marionette,
    AppLayout
) {
    'use strict';

    var App = Backbone.Marionette.Application.extend({

        initialize: function(){
            
            this.addInitializer(function(){
                this.addRegions({
                    mainView: "#app-wrapper"
                });

                this.mainView.show(new AppLayout());
            });

            this.start();
        }

    });
    
    return App;
});