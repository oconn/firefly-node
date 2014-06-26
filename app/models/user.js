
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt   = require('bcrypt-nodejs');

var UserSchema = new Schema({
    local: {
        email: { type: String, required: true, index: { unique: true } },
        password: { type: String, required: true }
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);