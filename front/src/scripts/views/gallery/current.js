define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    'templates/gallery/current'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    template
) {
    "use strict";

    var CurrentGalleryItemView = Marionette.ItemView.extend({
        template: template,

        initialize: function() {

        }
    });

    return CurrentGalleryItemView;
});