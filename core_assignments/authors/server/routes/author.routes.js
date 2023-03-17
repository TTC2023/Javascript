const AuthorController = require('../controllers/author.controller'); 
module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.get('/api/author/:id', AuthorController.getOneAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
}

