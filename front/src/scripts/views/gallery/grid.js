define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    'templates/gallery/preview',
    'templates/gallery/gallery',
    'socketio'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    galleryPreviewTemplate,
    galleryGridTemplate,
    io
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
            'submit #image-upload': 'uploadImages'
        },

        uploadImages: function(e) {
            e.preventDefault();
            var that = this;

            this.$el.find('.upload-progress-bar').show();

            var socket = io.connect('http://localhost:4000');

            socket.on('uploadProgress', function(data) {
                that.$el.find('progress').val(data);

                if (data === 100) {
                    that.finishedUpload();
                }
            }); 

            var formData = new FormData(e.currentTarget);

            var xhr = new XMLHttpRequest();

            xhr.open('POST', '/api/galleries', true);
            xhr.send(formData);
        },

        finishedUpload: function() {
            this.collection.fetch();
            console.log(this.collection);
        }
    });

    return GalleryGridCompositeView;
});