const connection = require('../connection'); 

async function getByName(name) {
  const query = 'SELECT name FROM StoreManager.products WHERE name = ?';

  const [product] = await connection.execute(query, [name]);

  return product;
}

module.exports = getByName;
