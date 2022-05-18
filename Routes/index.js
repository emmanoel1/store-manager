const express = require('express');
const rescue = require('express-rescue');

const route = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

const productsValidate = require('../middlewares/productsValidation');
const salesValidate = require('../middlewares/salesValidation');

route.get('/products', rescue(productsController.getAll));
route.get('/products/:id', rescue(productsController.getById));
route.post('/products', productsValidate, rescue(productsController.create));
route.put('/products/:id', productsValidate, rescue(productsController.update));
route.delete('/products/:id', rescue(productsController.destroy));

route.get('/sales', rescue(salesController.getAll));
route.get('/sales/:id', rescue(salesController.getById));
route.post('/sales', salesValidate, rescue(salesController.create));
route.put('/sales/:id', salesValidate, rescue(salesController.update));
route.delete('/sales/:id', rescue(salesController.destroy));

module.exports = route;
