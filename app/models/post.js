var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title:  {type: String, required: '{TITLE} is required', unique: true},
    description: {type: String, required: '{DESCRIPTION} is required'},
    body: {type: String, required: '{BODY} is required'},
    createdAt: {type: Date, 'default': Date.now()},
    updatedAt: {type: Date, 'default': Date.now()}
});

module.exports = mongoose.model('Post', PostSchema);