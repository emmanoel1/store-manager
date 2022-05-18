const productModel = require('../../models/productModel');

async function getAll() {
  const data = await productModel.getAll();
  
  return data;
}

module.exports = getAll;
