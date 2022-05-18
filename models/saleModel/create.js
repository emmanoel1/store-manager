const connection = require('../connection'); 

async function insert({ productId, quantity }, insertId) {
  const query = `
  INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
  VALUES(?, ?, ?)`;

  await connection.execute(query, [insertId, productId, quantity]);
} 

async function create(data) {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP())';

    const [{ insertId }] = await connection.execute(query);

    await data.map((sale) => insert(sale, insertId));

    return insertId;
}

module.exports = create;
