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
        appRoutes: {
             "": "index",
            "blog": "blog",
            "gallery": "gallery"
        },
        
        initialize: function(options) {
            
        }
    });

    return AppRouter;
});