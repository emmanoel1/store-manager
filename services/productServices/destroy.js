const productModel = require('../../models/productModel');

async function destroy(id) {
    const response = await productModel.destroy(id);
    if (response.affectedRows === 0) throw new Error('Product not found');
    return response;
}

module.exports = destroy;
