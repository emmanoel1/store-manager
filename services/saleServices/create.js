const saleModel = require('../../models/saleModel');

async function create(body) {
  const data = await saleModel.create(body);
  return data;
}

module.exports = create;
