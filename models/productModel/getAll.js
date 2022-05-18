const connection = require('../connection'); 

async function getAll() {
    const query = 'SELECT * FROM StoreManager.products LIMIT 100';
    const [response] = await connection.execute(query);
    return response;
}

module.exports = getAll;
