var Gallery = require('../models/gallery'),
    formidable = require('formidable'),
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    s3 = require('../../config/aws-config');

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

        var form = new formidable.IncomingForm();
        form.maxFieldSize = 40 * 1024 * 1024;
        form.maxFields = 0;
        form.multiples = true;
        form.uploadDir = path.join(__dirname + '/../../uploads');

        var gallery = new Gallery();

        form.on('progress', function() {
            var progress = {
                type: 'progress',
                bytesReceived: bytesReceived,
                bytesExpected: bytesExpected
            };

            socket.broadcast(JSON.stringify(progress));
        });

        form.parse(req, function(err, fields, files) {
            if (err) {
                res.send(err);
                return;
            }

            gallery.title = fields.title;

            if( !util.isArray(files.images) ) {
                // TODO Handle single image
            } else {
                files.images.forEach(function(file) {
                    
                    var bodyStream = fs.createReadStream(file.path);
                    var filePath = gallery.title + '/' + file.name;

                    s3.putObject({
                        Bucket: 'firefly-node',
                        Key: filePath,
                        Body: bodyStream,
                        ACL: 'public-read'
                    }, function(error, data) {
                        if (error) {
                            // res.send(error);
                        } 
                        gallery.images.push({url: s3.endpoint.href + 'firefly-node/' + filePath});

                        gallery.save(function(err) {
                            if (err) { 

                            }

                            // Clean up filesystem after upload complete
                            fs.unlink(file.path, function(err) {
                                if (err) {

                                }
                            });
                        });
                    });
                });
            }

            gallery.save(function(err) {
                if (err) {
                    res.send(err);
                }

                res.writeHead(200, {'content-type': 'text/plain'});
                res.write('received upload:\n\n');
                res.end(util.inspect({fields: fields, files: files}));
            });
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