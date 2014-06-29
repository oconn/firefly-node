define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/user_layout'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var UserLayout = Marionette.LayoutView.extend({
        template: template

    });

    return UserLayout;
});