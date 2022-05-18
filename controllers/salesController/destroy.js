const saleServices = require('../../services/saleServices');

async function destroy(req, res) {
  const { id } = req.params;
  await saleServices.destroy(id);

  return res.status(204).end();
}

module.exports = destroy;