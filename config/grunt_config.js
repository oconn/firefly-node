/* global module: false, require: false, __dirname: false */

var path = require('path');
var requirejs = require('requirejs');
var picker;

requirejs.config({
    paths: {
        config: path.join(__dirname, '..', 'front/src/scripts/config')
    }
});

picker = requirejs('config/picker');

module.exports = {
    app: requirejs('config/app'),
    build: picker({
        assetUrl: {
            'default': ''
        }
    })
};
