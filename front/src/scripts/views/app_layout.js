define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/app_layout',
    'state',

    'fastclick'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    state,

    FastClick
) {
    "use strict";

    var AppLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            main: "#main"
        },

        events: {
            'click .off-canvas-wrap': 'toggleNav'
        },

        initialize: function() {
            this.listenTo(state.vent, 'show:main', this.showMain);
        },

        showMain: function(view) {
            this.main.show(view);
        }
    });

    return AppLayout;
});