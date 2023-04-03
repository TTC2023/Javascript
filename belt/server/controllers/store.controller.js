const Store = require('../models/store.model');  

module.exports.findAllStores = (req, res) => {
    Store.find()
        .then(allStores => res.json(allStores))
        .catch(err => res.json(err));
}

module.exports.createStore =(req, res) => {
    Store.create(req.body)
        .then(newStore => res.json(newStore))
        .catch(err => res.json(err))
}

module.exports.getOneStore = (req, res) => {
    Store.findById(req.params.id)
        .then(oneStore => res.json(oneStore))
        .catch(err => res.json(err))
}

module.exports.updateStore = (req, res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(updateStore => res.json(updateStore))
        .catch(err => res.json(err))
}

module.exports.deleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(deletedStore => res.json(deletedStore))
        .catch(err => res.json(err))
}