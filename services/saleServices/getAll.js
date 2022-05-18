const saleModel = require('../../models/saleModel');

async function getAll() {
    const data = await saleModel.getAll();
    if (!data || data.length === 0) {
        const errMsg = 'Erro no servidor';
        throw new Error(errMsg);
    }
    return data;
}

module.exports = getAll;
