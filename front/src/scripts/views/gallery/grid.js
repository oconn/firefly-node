define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/gallery/preview'
], function(
    $,
    _,
    Backbone,
    Marionette,
    galleryPreviewTemplate
) {
    "use strict";

    var GalleryGridItemView = Marionette.ItemView.extend({
        template: galleryPreviewTemplate
    });

    var GalleryGridCollectionView = Marionette.CollectionView.extend({
        childView: GalleryGridItemView
    });

    return GalleryGridCollectionView;
});