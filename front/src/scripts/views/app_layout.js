define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/app_layout',
    'state',

    'fastclick',
    'foundation.offcanvas'
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

        toggleNav: function() {
            $('.off-canvas-wrap').foundation('offcanvas', 'open', 'move-right');
            $('.off-canvas-wrap').foundation('offcanvas', 'close', 'move-right');
            $('.off-canvas-wrap').foundation('offcanvas', 'toggle', 'move-right');
        },

        showMain: function(view) {
            this.main.show(view);
        }
    });

    return AppLayout;
});