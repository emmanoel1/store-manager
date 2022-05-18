const connection = require('../connection');

async function update(product) {
    const { quantity, saleId, productId } = product;
    const query = `
    UPDATE StoreManager.sales_products
    SET quantity = ?
    WHERE (sale_id = ?
    AND product_id = ?)`;
    const [response] = await connection.execute(query, [quantity, saleId, productId]);
    return response;
}

module.exports = update;
