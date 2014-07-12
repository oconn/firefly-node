var path = "../../../public";

require.config({
    paths: {
        // Foundation
        'foundation.core': path + '/packages/foundation/js/foundation/foundation',
        'foundation.reveal': path + '/packages/foundation/js/foundation/foundation.reveal',
        // 'foundation.abide': 'foundation/foundation.abide',
        // 'foundation.accordion': 'foundation/foundation.accordion',
        // 'foundation.alert': 'foundation/foundation.alert',
        // 'foundation.clearing': 'foundation/foundation.clearing',
        // 'foundation.dropdown': 'foundation/foundation.dropdown',
        // 'foundation.equalizer': 'foundation/foundation.equalizer',
        // 'foundation.interchange': 'foundation/foundation.interchange',
        // 'foundation.joyride': 'foundation/foundation.joyride',
        // 'foundation.magellan': 'foundation/foundation.magellan',
        // 'foundation.offcanvas': 'foundation/foundation.offcanvas',
        // 'foundation.orbit': 'foundation/foundation.orbit',
        // 'foundation.tab': 'foundation/foundation.tab',
        // 'foundation.tooltip': 'foundation/foundation.tooltip',
        // 'foundation.topbar': 'foundation/foundation.topbar',

        'fastclick': path + '/packages/foundation/js/vendor/fastclick',
        'modernizr': path + 'packages/modernizr/modernizer',
        // 'placeholder': 'vendor/placeholder'

        'jquery': path + '/packages/jquery/dist/jquery',
        'backbone': path + '/packages/backbone/backbone',
        'underscore': path + '/packages/underscore/underscore',
        'marionette': path + '/packages/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': path + '/packages/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': path + '/packages/backbone.babysitter/lib/backbone.babysitter',
        'handlebars':  path + '/scripts/handlebars',
        'marionette.formview': path + '/packages/marionette.formview/dist/FormView'
    },
    shim: {
        'foundation.core': {
            deps: [
            'jquery',
            'modernizr'
            ],
            exports: 'Foundation'
        },
        'foundation.reveal': {
            deps: [
            'foundation.core'
            ]
        },
        'marionette.formview': {
            deps: ['marionette']
        },
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
        },
        'fastclick': {
            exports: 'FastClick'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
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