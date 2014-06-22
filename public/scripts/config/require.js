var require = {
    paths: {
        'jquery': '../../packages/jquery/dist/jquery',
        'backbone': '../../packages/backbone/backbone',
        'underscore': '../../packages/underscore/underscore',
        'marionette': '../../packages/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../../packages/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../../packages/backbone.babysitter/lib/backbone.babysitter'
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
        }
    }
};