const StoreController = require ('../controllers/store.controller')

module.exports = (app) => {
    app.get('/api/stores', StoreController.findAllStores)
    app.post('/api/stores', StoreController.createStore)
    app.get('/api/stores/:id', StoreController.getOneStore)
    app.put('/api/stores/:id', StoreController.updateStore)
    app.delete('/api/stores/:id', StoreController.deleteStore)
}