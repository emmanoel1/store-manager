const model = require('../models/products');
const { NOT_FOUND, CONFLICT } = require('../statusCode');

const getAllProducts = async () => {
    const products = await model.allProducts();
    return products;
};

const getProductsById = async (id) => {
    const product = await model.productsById(id);
    if (!product) {
        const err = { status: NOT_FOUND, message: 'Product not found' };
        throw err;
    }
    return product;
};

const registerProduct = async (product) => {
    const { name, quantity } = product;

    const products = await model.allProducts();
    const exist = products.find((e) => e.name === name);
    if (exist) {
        const err = { status: CONFLICT, message: 'Product already exists' };
        throw err;
    }
    
    const registered = await model.createProduct(name, quantity);
    return registered;
};

const updateProduct = async (product) => {
    const { id, name, quantity } = product;

    await getProductsById(id);
    const editedProduct = await model.editProduct(id, name, quantity);
    return editedProduct;
};

const deleteProduct = async (id) => {
    await getProductsById(id);
    await model.deleteProduct(id);
};

module.exports = {
    getAllProducts,
    getProductsById,
    registerProduct,
    updateProduct,
    deleteProduct,
};