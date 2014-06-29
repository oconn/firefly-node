define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/user_layout',
    'state'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    state
) {
    "use strict";

    var UserLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            main: "#main"
        },

        initialize: function() {
            this.listenTo(state.vent, 'show:main', this.showMain);
        },

        showMain: function(view) {
            this.main.show(view);
        }

    });

    return UserLayout;
});