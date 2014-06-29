define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/home/index'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var HomeItemView = Marionette.ItemView.extend({
        template: template
    });

    return HomeItemView;
});