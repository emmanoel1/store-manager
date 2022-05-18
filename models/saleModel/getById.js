const connection = require('../connection');

const serialize = (sale) => ({
  productId: sale.product_id,
  quantity: sale.quantity,
  date: sale.date,
});

async function getById(id) {
    const query = `SELECT product_id, quantity, date
FROM StoreManager.sales_products
JOIN StoreManager.sales
WHERE sales_products.sale_id = sales.id
AND sales.id = ?
ORDER BY sale_id, product_id`;

    const [response] = await connection.execute(query, [id]);
    return response.map(serialize);
}

module.exports = getById;
