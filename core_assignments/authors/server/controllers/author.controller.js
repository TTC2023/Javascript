const Author = require('../models/author.model'); 

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(deleteAuthor => res.json(deleteAuthor))
        .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json(err))
}