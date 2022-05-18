const connection = require('../connection');

async function destroy(id) {
    const query = 'DELETE from StoreManager.products WHERE id = ?';
    const [response] = await connection.execute(query, [id]);
    return response;
}

module.exports = destroy;
