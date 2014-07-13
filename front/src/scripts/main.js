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

        // Foundation
        'foundation.core': path + '/packages/foundation/js/foundation/foundation',
        'foundation.abide': path + '/packages/foundation/js/foundation/foundation.abide',
        'foundation.accordion': path + '/packages/foundation/js/foundation/foundation.accordion',
        'foundation.alert': path + '/packages/foundation/js/foundation/foundation.alert',
        'foundation.clearing': path + '/packages/foundation/js/foundation/foundation.clearing',
        'foundation.dropdown': path + '/packages/foundation/js/foundation/foundation.dropdown',
        'foundation.equalizer': 'foundation/foundation.equalizer',
        'foundation.interchange': path + '/packages/foundation/js/foundation/foundation.interchange',
        'foundation.joyride': path + '/packages/foundation/js/foundation/foundation.joyride',
        'foundation.magellan': path + '/packages/foundation/js/foundation/foundation.magellan',
        'foundation.offcanvas':path + '/packages/foundation/js/foundation/foundation.offcanvas',
        'foundation.orbit': path + '/packages/foundation/js/foundation/foundation.orbit',
        'foundation.reveal': path + '/packages/foundation/js/foundation/foundation.reveal',
        'foundation.tab': path + '/packages/foundation/js/foundation/foundation.tab',
        'foundation.tooltip': path + '/packages/foundation/js/foundation/foundation.tooltip',
        'foundation.topbar': path + '/packages/foundation/js/foundation/foundation.topbar',

        // Vendor
        'jquery.cookie': path + '/packages/foundation/js/vendor/jquery.cookie',
        'fastclick': path + '/packages/foundation/js/vendor/fastclick',
        'modernizr': path + '/packages/foundation/js/vendor/modernizr',
        'placeholder': path + '/packages/foundation/js/vendor/placeholder'
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
        'marionette.formview': {
            deps: ['marionette']
        },
        'marionette': {
          deps : ['jquery', 'underscore', 'backbone'],
          exports : 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        
        /* Foundation */
        'foundation.core': {
            deps: [
            'jquery',
            'modernizr'
            ],
            exports: 'Foundation'
        },
        'foundation.abide': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.accordion': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.alert': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.clearing': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.dropdown': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.equalizer': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.interchange': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.joyride': {
            deps: [
            'foundation.core',
            'foundation.cookie'
            ]
        },
        'foundation.magellan': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.offcanvas': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.orbit': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.reveal': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.tab': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.tooltip': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.topbar': {
            deps: [
            'foundation.core'
            ]
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