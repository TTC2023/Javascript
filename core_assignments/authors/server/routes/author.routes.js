const AuthorController = require('../controllers/author.controller'); 
module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor)
}

