const productModel = require('../../models/productModel');

async function getById(id) {
    const data = await productModel.getById(id);

    if (!data) {
      const errMsg = 'Product not found';
      throw new Error(errMsg);
    }

    return data;
}

module.exports = getById;
