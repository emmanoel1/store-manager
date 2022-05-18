const express = require('express');

const route = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

const productMid = require('../middlewares/productMid');
const saleMid = require('../middlewares/saleMid');

route.get('/products', productsController.getAll);
route.get('/products/:id', productsController.getById);
route.post('/products', productMid, productsController.create);
route.put('/products/:id', productMid, productsController.update);
route.delete('/products/:id', productsController.destroy);

route.get('/sales', salesController.getAll);
route.get('/sales/:id', salesController.getById);
route.post('/sales', saleMid, salesController.create);
route.put('/sales/:id', saleMid, salesController.update);
route.delete('/sales/:id', productsController.destroy);

module.exports = route;
