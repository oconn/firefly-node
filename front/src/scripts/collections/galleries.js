define([
    'jquery',
    'underscore',
    'backbone',
    'models/gallery'
], function(
    $,
    _,
    Backbone,
    GalleryModel
) {
    "use strict";

    var GalleriesCollection = Backbone.Collection.extend({
        url: '/api/galleries',
        model: GalleryModel,

        comparator: function(post) {
            var date = new Date(post.get("createdAt"));
            return -date;
        },

        initialize: function() {
            
        }
    });

    return GalleriesCollection;
});