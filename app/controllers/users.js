var User = require('../models/user');

module.exports =  {
    getUsers: function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    },

    addUser: function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({user: user, message: "User Created"});
        });
    },

    getUser: function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
        }); 
    },

    updateUser: function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);

            user.name = req.body.name;
            user.email = req.body.email;

            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({user: user, message: "User Updated"});
            });
        });
    },

    deleteUser: function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({user: user, message: "User Deleted"});
        });
    }    
};