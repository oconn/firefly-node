define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/guest_layout'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var GuestLayout = Marionette.LayoutView.extend({
        template: template

    });

    return GuestLayout;
});