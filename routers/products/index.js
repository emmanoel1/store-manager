const express = require('express');
const rescue = require('express-rescue');
const productController = require('../../controllers/products');
const { validateProduct } = require('../../schemas/schemasJoi');
const validateJoi = require('../../middlewares/validateJoi');

const productsRouter = express.Router();

productsRouter.get('/', rescue(productController.listProducts));
productsRouter.get('/:id', rescue(productController.productsById));
productsRouter.post('/', validateJoi(validateProduct), rescue(productController.createNewProduct));
productsRouter.put('/:id', rescue(productController.editProduct));
productsRouter.delete('/:id', rescue(productController.deleteProduct));

module.exports = productsRouter;