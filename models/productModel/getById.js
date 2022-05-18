const connection = require('../connection'); 

async function getById(id) {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[response]] = await connection.execute(query, [id]);
  return response;
}

module.exports = getById;
