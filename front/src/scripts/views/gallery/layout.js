define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/gallery/layout',
    'views/gallery/grid',

    'collections/galleries'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    GalleryGridView,

    GalleriesCollection
) {
    "use strict";

    var GalleryLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            galleriesGrid: '#galleries-grid'
        },

        initialize: function() {

        },

        onRender: function() {
            this.galleriesGrid.show(new GalleryGridView({
                collection: new GalleriesCollection()
            }));
        }
    });

    return GalleryLayout;
});