define(['backbone', 'backbone.wreqr'], function (Backbone) {
    'use strict';

    var state = {
        vent: new Backbone.Wreqr.EventAggregator(),
        reqres: new Backbone.Wreqr.RequestResponse(),
        commands: new Backbone.Wreqr.Commands()
    };

    window.state = state;

    return state;
});
