const productServices = require('../../services/productServices');

async function allProducts(_req, res) {
  try {
    const resultData = await productServices.getAll();

    return res.status(200).json(resultData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = allProducts;
