define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
) {
    "use strict";

    var PostModel = Backbone.Model.extend({
        urlRoot: '/api/posts',
        idAttribute: '_id'
    });

    return PostModel;
});