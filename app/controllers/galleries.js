var Gallery = require('../models/gallery');

module.exports = {
    getGalleries: function(req, res) {
        Gallery.find(function(err, galleries) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(galleries);
        });
    },

    addGallery: function(req, res) {
        var gallery = new Gallery();
        gallery.title = req.body.title;
        gallery.createdAt = Date.now();
        gallery.updatedAt = Date.now();

        gallery.save(function(err) {
            if (err) {
                res.send(err);
                return;
            }

            res.json({gallery: "Gallery Added"});
        });
    },

    getGallery: function(req, res) {
        Gallery.findById(req.params.gallery_id, function(err, gallery) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(gallery);
        });
    },

    updateGallery: function(req, res) {
        Gallery.findById(req.params.gallery_id, function(err, gallery) {
            if (err) {
                res.send(err);
                return;
            }

            var body = req.body;

            gallery.title = body.title;
            gallery.updatedAt = Date.now();

            gallery.save(function(err) {
                if (err) {
                    res.send(err);
                    return;
                }

                res.json({success: "Gallery Updated"});
            });
        });
    },

    deleteGallery: function(req, res) {
        Gallery.remove({
            _id: req.body.gallery_id
        }, function(err, gallery) {
            if (err) {
                res.send(err);
                return;
            }

            res.json({success: "Gallery Removed"});
        });
    }
};