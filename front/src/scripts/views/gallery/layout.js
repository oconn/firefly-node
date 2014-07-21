define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    'templates/gallery/layout',
    'views/gallery/grid',
    'views/gallery/current',

    'collections/galleries'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    template,
    GalleryGridView,
    CurrentGallery,

    GalleriesCollection
) {
    "use strict";

    var GalleryLayout = Marionette.LayoutView.extend({
        template: template,

        regions: {
            galleriesGrid: '#galleries-grid',
            currentGallery: '#current-gallery'
        },

        initialize: function() {
            this.listenTo(state.vent, 'show:gallery', this.showGallery);
        },

        onRender: function() {
            this.galleriesGrid.show(new GalleryGridView({
                collection: new GalleriesCollection()
            }));
        },

        showGallery: function(model) {
            this.currentGallery.show(new CurrentGallery({
                model: model
            }));
        }
    });

    return GalleryLayout;
});