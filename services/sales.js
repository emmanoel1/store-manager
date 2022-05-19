const modelSales = require('../models/sales');
const { NOT_FOUND } = require('../statusCode');

const getAllSales = async () => {
    const sales = await modelSales.allSales();
    return sales;
};

const getSalesById = async (id) => {
    const sale = await modelSales.salesById(id);
    if (sale.length === 0) {
        const err = { status: NOT_FOUND, message: 'Sale not found' };
        throw err;
    }
    return sale;
};

const createSale = async (sale) => {
    const id = await modelSales.createSale();
    const sales = await Promise.all(sale.map(({ productId, quantity }) => 
        modelSales.createSaleProduct(id, productId, quantity)));
    return {
        id,
        itemsSold: sales,
    };
};

const editSale = async (sale) => {
    const { id, productId, quantity } = sale;
    const editedSale = await modelSales.editSale(id, productId, quantity);
    return editedSale;
};

const deleteSale = async (id) => {
    await getSalesById(id);
    await modelSales.deleteSale(id);
};

module.exports = {
    getAllSales,
    getSalesById,
    createSale,
    editSale,
    deleteSale,
};