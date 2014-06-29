define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'templates/blog/index',
    'views/blog/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    template,
    PostItemView
) {
    "use strict";

    var BlogCompositeView = Marionette.CompositeView.extend({
        template: template,
        childView: PostItemView,    

        initialize: function() {
            this.collection.fetch();
        }

    });

    return BlogCompositeView;
});