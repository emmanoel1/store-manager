const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../../controllers/sales');
const { validateSale } = require('../../schemas/schemasJoi');
const validateJoi = require('../../middlewares/validateJoi');

const salesRouter = express.Router();

salesRouter.get('/', rescue(saleController.listSales));
salesRouter.get('/:id', rescue(saleController.salesById));
salesRouter.post('/', validateJoi(validateSale), rescue(saleController.createSale));
salesRouter.put('/:id', validateJoi(validateSale), rescue(saleController.editSale));
salesRouter.delete('/:id', rescue(saleController.deleteSale));

module.exports = salesRouter;