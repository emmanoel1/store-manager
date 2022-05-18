const connection = require('../connection'); 

async function create({ name, quantity }) {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES(?, ?)';

  const createData = await connection.execute(query, [name, quantity]);

  return createData;
}

module.exports = create;
