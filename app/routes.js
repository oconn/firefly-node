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
}