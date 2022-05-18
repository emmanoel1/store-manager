const connection = require('../connection');

async function update(product) {
    const { name, quantity, id } = product;
    const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
    const [response] = await connection.execute(query, [name, quantity, id]);
    return response;
}

module.exports = update;
