const Product = require('../models/product.model');  

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.removeProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}


