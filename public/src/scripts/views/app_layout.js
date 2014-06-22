define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/layout'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var AppLayout = Marionette.LayoutView.extend({
        template: template

    });

    return AppLayout;
});