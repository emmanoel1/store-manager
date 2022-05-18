const saleModel = require('../../models/saleModel');

async function getById(id) {
    const data = await saleModel.getById(id);
    console.log(data);
    if (!data || data.length === 0) {
        const errMsg = 'Sale not found';
        throw new Error(errMsg);
    }
    return data;
}

module.exports = getById;
