var path = "../../../public";

require.config({
    paths: {
        'jquery': path + '/packages/jquery/dist/jquery',
        'backbone': path + '/packages/backbone/backbone',
        'underscore': path + '/packages/underscore/underscore',
        'marionette': path + '/packages/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': path + '/packages/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': path + '/packages/backbone.babysitter/lib/backbone.babysitter',
        'handlebars':  path + '/scripts/handlebars'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
          deps : ['jquery', 'underscore'],
          exports : 'Backbone'
        },
        'marionette': {
          deps : ['jquery', 'underscore', 'backbone'],
          exports : 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([
    'app'
], function(App) {
    'use strict';
    
    var app = new App();

    app.initialize();

    window.app = app;
});