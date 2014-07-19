define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
) {
    "use strict";

    var GalleryModel = Backbone.Model.extend({
        urlRoot: '/api/galleries',
        idAttribute: '_id'
    });

    return GalleryModel;
});