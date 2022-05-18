const productModel = require('../../models/productModel');

async function update(product) {
    const response = await productModel.update(product);
    if (response.affectedRows === 0) throw new Error('Product not found');
    return response;
}

module.exports = update;
