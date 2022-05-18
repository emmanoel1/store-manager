const saleModel = require('../../models/saleModel');

async function update(sale) {
    const response = await saleModel.update(sale);
    return response;
}

module.exports = update;
