var usersController = require('./controllers/users');
var staticPagesController = require('./controllers/staticPages');
var authentication = require('./controllers/authentication');

module.exports = function(app, passport) {
    app.get('/', staticPagesController.index);

    // ************ API ************** //
    app.get('/api/users', usersController.getUsers);
    app.post('/api/users', usersController.addUser);
    app.get('/api/users/:user_id', usersController.getUser);
    app.put('/api/users/:user_id', usersController.updateUser);
    app.delete('/api/users/:user_id', usersController.deleteUser);  

    // ************* AUTH ************ //

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '', 
        failureRedirect : '/login',
        failureFlash : true 
    }));    

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    function isLoggedIn(req, res, next) {

      // if user is authenticated in the session, carry on 
      if (req.isAuthenticated())
        return next();

      // if they aren't redirect them to the home page
      req.flash('error', 'You are not permitted to view this page');
      res.redirect('/#/login');
    }

    function isAdmin(req, res, next) {
      if (req.isAuthenticated() && req.user.local.admin)
        return next();
      
      res.redirect('/login');
    }
}