const saleModel = require('../../models/saleModel');
const {
    errorHandler, stockQuantity, stockEntry, removeSales,
} = require('../../utils/auxiliaryFunctions');

async function destroy(id) {
const res = await saleModel.getById(id);

if (!res) {
  throw errorHandler(422, 'Sale not found');
}

const quantity = await stockQuantity(id);
await Promise.all(quantity.map((e) => stockEntry(e.productId, e.quantity)));

await removeSales(id);
const sale = await saleModel.destroy(id);

return sale;
}

module.exports = destroy;