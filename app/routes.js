var usersController = require('./controllers/users');
var postsController = require('./controllers/posts');
var galleriesController = require('./controllers/galleries');

var staticPagesController = require('./controllers/staticPages');
var authentication = require('./controllers/authentication');

module.exports = function(app, passport) {
    app.get('/', staticPagesController.index);

    //*********************************//
    //************* API ***************//
    //*********************************//

    //************* USERS *************//
    app.get('/api/users', usersController.getUsers);
    app.post('/api/users', usersController.addUser);
    app.get('/api/users/:user_id', usersController.getUser);
    app.put('/api/users/:user_id', usersController.updateUser);
    app.del('/api/users/:user_id', usersController.deleteUser);  

    //************* POSTS *************//
    app.get('/api/posts', postsController.getPosts);
    app.post('/api/posts', postsController.addPost);
    app.get('/api/posts/:post_id', postsController.getPost);
    app.put('/api/posts/:post_id', postsController.updatePost);
    app.del('/api/posts/:post_id', postsController.deletePost); 

    //*********** GALLERIES ***********//
    app.get('/api/galleries', galleriesController.getGalleries);
    app.post('/api/galleries', galleriesController.addGallery);
    app.get('/api/galleries/:gallery_id', galleriesController.getGallery);
    app.put('/api/galleries/:gallery_id', galleriesController.updateGallery);
    app.del('/api/galleries/:gallery_id', galleriesController.deleteGallery);

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
      if (req.isAuthenticated()) {
        return next();
      }

      // if they aren't redirect them to the home page
      req.flash('error', 'You are not permitted to view this page');
      res.redirect('/#/login');
    }

    function isAdmin(req, res, next) {
      if (req.isAuthenticated() && req.user.local.admin) {
        return next();
      }

      res.redirect('/login');
    }
};