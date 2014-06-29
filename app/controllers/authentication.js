// var bcrypt = require('bcrypt'),
//     SALT_WORK_FACTOR = 10,
//     User = require('../models/user');

// module.exports = {

//     isLoggedIn: function(req, res) {
//         req.signedCookies.user_id;
//         res.json({user: false});
//     },

//     login: function() {

//     },

//     signUp: function(req, res) {
        
//         var user = req.body;

//         if (user && user.email && user.password && user.password === user.password_confirmation) {
//             bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {

//                 bcrypt.hash(user.password, salt, function(err, hash) {  
//                     user.password = hash;

//                     newUser = new User(user);
//                     newUser.save(function(err){
//                         if (err) {
//                             console.log(err);
//                             if (err.code === 11000) {
//                                 res.json({error: "Email has already been taken."});
//                             } else {
//                                 res.json({error: "Error..."});
//                             }
//                         } else {
//                             res.json({success: newUser.email + " saved."});
//                         }

//                     });
//                 });
//             });
//         } else {
//             res.json({error: "Email and Password are required."});
//         }
//     }
// };