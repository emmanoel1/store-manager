const saleServices = require('../../services/saleServices');

async function update(req, res) {
  try {
      const { id: saleId } = req.params;
      const [{ productId, quantity }] = req.body;
      const sale = { saleId, productId, quantity };
      await saleServices.update(sale);

    return res.status(200).json({ saleId, itemUpdated: [{ productId, quantity }] });
  } catch (err) {
      throw new Error();
  }
}

module.exports = update;