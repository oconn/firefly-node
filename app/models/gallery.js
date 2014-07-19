var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GallerySchema = new Schema({
    title:  {type: String, required: '{TITLE} is required', unique: true},
    createdAt: {type: Date, 'default': Date.now()},
    updatedAt: {type: Date, 'default': Date.now()}
});

module.exports = mongoose.model('Gallery', GallerySchema);