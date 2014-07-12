define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'state',
    'templates/blog/main',

    'views/blog/index',
    'views/blog/postForm',

    'collections/posts',

    'models/post'
], function(
    $,
    _,
    Backbone,
    Marionette,
    state,
    template,

    IndexView,
    PostFormView,

    PostsCollection,
    PostModel
) {
    "use strict";

    var BlogLayoutView = Marionette.LayoutView.extend({
        template: template,
        
        regions: {
            postList: '#post-list',
            postForm: '#post-form'
        },

        events: {
            'click .create': 'form'
        },

        initialize: function() {
            this.collection = new PostsCollection();
            this.collection.fetch();

            // this.listenTo(this, 'childview:deletePost', this.deletePost);
        },

        onShow: function() {
            this.postList.show(new IndexView({collection: this.collection}));

            this.listenTo(this.postList.currentView, 'edit:post', this.form);
        },

        form: function(post) {
            this.postList.$el.slideUp(600, function() {

                this.postForm.show(new PostFormView({
                    model: post.model || new PostModel(),
                    collection: this.collection
                }));

                this.listenTo(this.postForm.currentView, 'close:form', this.closeForm);

                this.postForm.$el.slideDown(600);
            }.bind(this));

        },

        closeForm: function() {
            this.postForm.$el.slideUp(600, function() {

                this.postList.$el.slideDown(600);
            }.bind(this));
        }
    });

    return BlogLayoutView;
});