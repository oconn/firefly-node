var Post = require('../models/post');

module.exports = {
    getPosts: function(req, res) {
        Post.find(function(err, posts) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(posts);
        });
    },

    addPost: function(req, res) {
        var post = new Post();
        post.title = req.body.title;
        post.description = req.body.description;
        post.body = req.body.body;
        post.createdAt = Date.now();
        post.updatedAt = Date.now();
        
        post.save(function(err) {
            if (err) {
                res.json({error: err});
                return;
            }

            res.json({success: "Post added"});
        });
    },

    getPost: function(req, res) {
        Post.findById(req.params.post_id, function(err, post) {
            if (err) {
                res.json({error: err});
                return;
            }

            res.json(post);
        });
    },

    updatePost: function(req, res) {
        Post.findById(req.params.post_id, function(err, post) {
            if (err) {
                res.json({error: err});
                return;
            }

            post.title = req.body.title;
            post.description = req.body.description;
            post.body = req.body.body;
            post.updatedAt = Date.now();

            post.save(function(err) {
                if (err) {
                    res.json({error: err});
                    return;
                }

                res.json({success: "Post updated"});
            });
        });
    },

    deletePost: function(req, res) {
        Post.remove({
            _id: req.params.post_id
        }, function(err, post) {
            if (err) {
                res.json({error: err});
                return;
            }

            res.json({success: "Post Removed"});
        });
    }
};