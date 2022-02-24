import {ProductController} from './_productController'
import {createRouter} from '../../utils/createRouter'
const productController = new ProductController()

const routes = [
    {
        path: "/",
        method: "GET",
        handler: productController.getProducts.bind(productController) 
    },
    {
        path: "/",
        method: "POST",
        handler: productController.addProduct.bind(productController),
        responseStatus: 201
    },
    {
        path: "/:id",
        method: "GET",
        handler: productController.getProduct.bind(productController)
    },
    {
        path: "/:id",
        method: "PATCH",
        handler: productController.updateProduct.bind(productController)
    },
    {
        path: "/:id",
        method: "DELETE",
        handler: productController.deleteProduct.bind(productController),
        responseStatus: 204
    },

]


module.exports = createRouter(routes);