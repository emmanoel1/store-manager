const connection = require('../connection'); 

async function getAll() {
    const query = 'SELECT * From StoreManager.products';
    const [response] = await connection.execute(query);
    return response;
}

module.exports = getAll;
