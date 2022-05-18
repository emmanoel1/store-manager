const saleServices = require('../../services/saleServices');

async function getById(req, res) {
  try {
    const { id } = req.params;
    const resultData = await saleServices.getById(id);
    return res.status(200).json(resultData);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}

module.exports = getById;
