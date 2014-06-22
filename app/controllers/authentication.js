module.exports = {

    isLoggedIn: function(req, res) {
        req.signedCookies.user_id
        res.json({user: false});
    },

    login: function() {

    },

    signUp: function() {

    }
};