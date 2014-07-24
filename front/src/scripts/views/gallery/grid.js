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
            this.socket = io.connect('http://localhost:4000');
        },

        events: {
            'submit #image-upload': 'uploadImages'
        },

        uploadImages: function(e) {
            e.preventDefault();
            var that = this;

            var serverPercent = 0;
            var s3Percent = 0;

            this.$el.find('.upload-progress-bar').show();


            this.socket.on('uploadProgress', function(data) {
                serverPercent = data;
                that.updateProgressBar(serverPercent + s3Percent);
            });

            this.socket.on('s3UploadProgress', function(data) {
                s3Percent = data;
                that.updateProgressBar(serverPercent + s3Percent);
            });

            var formData = new FormData(e.currentTarget);

            var xhr = new XMLHttpRequest();

            xhr.open('POST', '/api/galleries', true);
            xhr.send(formData);
        },

        updateProgressBar: function(data) {
            var progressBar = this.$el.find('.upload-progress-bar');

            progressBar.val(data);

            if (data === 200) {
                this.finishedUpload();
            }
        },

        finishedUpload: function() {
            this.collection.fetch();
        }
    });

    return GalleryGridCompositeView;
});