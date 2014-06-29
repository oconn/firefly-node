define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/index'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template
) {
    "use strict";

    var BlogItemView = Marionette.ItemView.extend({

    });

    var BlogCollectionView = Marionette.CompositeView.extend({
        template: template,
        childView: BlogItemView,

        initialize: function() {

        }

    });

    return BlogCollectionView;
});