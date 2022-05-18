const productModel = require('../../models/productModel');

async function create({ name, quantity }) {
    const [product] = await productModel.getByName(name);

    if (product !== undefined && product.name === name) {
        throw new Error('Product already exists');
    }

    const [{ insertId }] = await productModel.create({ name, quantity });

    return { id: insertId, name, quantity };
}

module.exports = create;