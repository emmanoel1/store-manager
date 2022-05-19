const service = require('../services/products');
const { SUCESS, NO_CONTENT, CREATED } = require('../statusCode');

const listProducts = async (_req, res) => {
        const products = await service.getAllProducts();
        return res.status(SUCESS).json(products);
};

const productsById = async (req, res) => {
        const { id } = req.params;
        const product = await service.getProductsById(id);
        return res.status(SUCESS).json(product);
};

const createNewProduct = async (req, res) => {
        const newProduct = await service.registerProduct(req.body);
        return res.status(CREATED).json(newProduct);
};

const editProduct = async (req, res) => {
        const { id } = req.params;
        let obj = req.body;
        obj = { id, ...obj };
        const editedProduct = await service.updateProduct(obj);
        return res.status(SUCESS).json(editedProduct);
};

const deleteProduct = async (req, res) => {
        const { id } = req.params;
        await service.deleteProduct(id);
        return res.status(NO_CONTENT).json();
};

module.exports = {
    listProducts,
    productsById,
    createNewProduct,
    editProduct,
    deleteProduct,
};