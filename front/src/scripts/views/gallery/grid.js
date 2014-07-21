define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    'templates/gallery/preview',
    'templates/gallery/gallery'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    galleryPreviewTemplate,
    galleryGridTemplate
) {
    "use strict";

    var GalleryGridItemView = Marionette.ItemView.extend({
        template: galleryPreviewTemplate,

        events: {
            'click h2': 'showGallery'
        },

        showGallery: function() {
            state.vent.trigger('show:gallery', this.model);
        }
    });

    var GalleryGridCompositeView = Marionette.CompositeView.extend({
        childView: GalleryGridItemView,
        childViewContainer: '#grid',
        template: galleryGridTemplate,

        initialize: function() {
            this.collection.fetch();
        },

        events: {
            'submit #image-upload': 'uploadImage'
        },

        uploadImage: function(e) {
            e.preventDefault();

            var formData = new FormData(e.currentTarget);

            var xhr = new XMLHttpRequest();

            xhr.addEventListener("progress", this.updateProgress, false);
            xhr.addEventListener("load", this.transferComplete, false);
            xhr.addEventListener("error", this.transferFailed, false);
            xhr.addEventListener("abort", this.transferCanceled, false);

            xhr.open('POST', '/api/galleries', true);
            xhr.send(formData);
        },

        updateProgress: function(evt) {
            // console.log(evt);
        },

        transferComelete: function() {

        },

        transferFailed: function() {

        },

        transferedCancled: function() {

        }
    });

    return GalleryGridCompositeView;
});