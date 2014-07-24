var Gallery = require('../models/gallery'),
    Formidable = require('formidable'),
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    s3 = require('../../config/aws-config'),
    io = require('socket.io').listen(4000);

    io.on('connection', function(socket) {
        socket.join('sessionId');
    });

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

        var form = new Formidable.IncomingForm();
        form.maxFieldSize = 40 * 1024 * 1024;
        form.maxFields = 0;
        form.multiples = true;
        form.uploadDir = path.join(__dirname + '/../../uploads');

        var gallery = new Gallery(),
            fields = [],
            files = [];

        form
            .on('progress', function(bytesReceived, bytesExpected) {
                io.sockets.in('sessionId').emit('uploadProgress', (bytesReceived * 100) / bytesExpected);
            })

            .on('fileBegin', function(name, file) {
                
            })

            .on('field', function(name, value) {
                fields.push({name: name, value: value});
            })

            .on('file', function(name, file) {
                files.push({name: name, file: file});
            })

            .on('error', function(err) {
               
            })

            .on('aborted', function() {
                // res.write('upload aborted');
            })

            .on('end', function() {
                processForm(fields, files);

                res.writeHead(200, {'content-type': 'text/plain'});
                res.write('received upload');
                res.end();
            });

        form.parse(req, function(err, fields, files) {
            if (err) {
                
                return;
            }
        });
    
        function processForm(fields, files) {
            gallery.title = fields[0].value.trim();
            uploadImages(files, saveGallery);
        }

        function uploadImages(images, callback) {
            var l = images.length;
            var count = 0;
            var that = this;

            images.forEach(function(image) {

                var bodyStream = fs.createReadStream(image.file.path);
                var filePath = gallery.title + '/' + image.file.name;
                
                gallery.images.push({url: s3.endpoint.href + 'firefly-node/' + filePath});


                s3.putObject({
                    Bucket: 'firefly-node',
                    Key: filePath,
                    Body: bodyStream,
                    ACL: 'public-read'
                }, function(error, data) {
                    if (error) {
                        // res.send(error);
                    } 

                    count++;
                    io.sockets.in('sessionId').emit('s3UploadProgress', (count / l) * 100);

                    // Clean up filesystem after upload complete
                    fs.unlink(image.file.path, function(err) {
                        if (err) {

                        }
                    });
                });


            });

            callback(gallery);
        }

        function saveGallery(model){
            model.save(function(err){
                if (err) {

                }
            }); 
        }

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