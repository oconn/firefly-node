var path = "../../../public";

require.config({
    paths: {
        'jquery': path + '/packages/jquery/dist/jquery',
        'backbone': path + '/packages/backbone/backbone',
        'underscore': path + '/packages/underscore/underscore',
        'marionette': path + '/packages/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': path + '/packages/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': path + '/packages/backbone.babysitter/lib/backbone.babysitter',
        'handlebars':  path + '/scripts/handlebars',
        'marionette.formview': path + '/packages/marionette.formview/dist/FormView',
        
        // Vendor
        'jquery.cookie': path + '/packages/foundation/js/vendor/jquery.cookie',
        'fastclick': path + '/packages/foundation/js/vendor/fastclick',
        'modernizr': path + '/packages/foundation/js/vendor/modernizr',
        'placeholder': path + '/packages/foundation/js/vendor/placeholder',
        'socketio': path + '/scripts/socket.io-client/socket.io'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'socketio': {
          exports: 'io'
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
        },
        'marionette.formview': {
            deps: ['marionette']
        },
        
        /* Vendor Scripts */
        'jquery.cookie': {
            deps: [
            'jquery'
            ]
        },
        'fastclick': {
            exports: 'FastClick'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
        'placeholder': {
            exports: 'Placeholders'
        }
    }
});

require(['app'], function(App) {
    'use strict';

    var app = new App();

    app.initialize();

    window.app = app;
});