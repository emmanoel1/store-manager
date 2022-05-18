const connection = require('../connection'); 

const serialize = (sale) => ({
    saleId: sale.sale_id,
    productId: sale.product_id,
    quantity: sale.quantity,
    date: sale.date,
});

async function getAll() {
const query = `SELECT sale_id, product_id, quantity, date
FROM StoreManager.sales_products JOIN StoreManager.sales
WHERE sales_products.sale_id = sales.id`;

const [response] = await connection.execute(query);
return response.map(serialize);
}

module.exports = getAll;
