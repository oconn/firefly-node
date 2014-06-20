var usersController = require('./controllers/users');
var staticPagesController = require('./controllers/staticPages')

module.exports = function(app) {
    app.get('/', staticPagesController.index);

    // ************ API ************** //
    app.get('/api/users', usersController.getUsers);
    app.post('/api/users', usersController.addUser);
    app.get('/api/users/:user_id', usersController.getUser);
    app.put('/api/users/:user_id', usersController.updateUser);
    app.delete('/api/users/:user_id', usersController.deleteUser);        
}