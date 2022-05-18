const saleServices = require('../../services/saleServices');

async function getAll(_req, res) {
    try {
        const resultData = await saleServices.getAll();

        return res.status(200).json(resultData);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
}

module.exports = getAll;
