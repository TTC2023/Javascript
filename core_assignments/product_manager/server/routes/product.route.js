const ProductController = require ('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts)
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.put('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.removeProduct)
}