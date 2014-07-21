var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Images = new Schema({
    url:  {type: String, required: '{URL} is required'},
    createdAt: {type: Date, 'default': Date.now()},
    updatedAt: {type: Date, 'default': Date.now()}
});

var GallerySchema = new Schema({
    title:  {type: String, required: '{TITLE} is required', unique: true},
    images: [Images],
    createdAt: {type: Date, 'default': Date.now()},
    updatedAt: {type: Date, 'default': Date.now()}
});


module.exports = mongoose.model('Gallery', GallerySchema);