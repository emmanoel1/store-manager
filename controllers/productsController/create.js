const productServices = require('../../services/productServices');

async function create(req, res) {
  try {
    const { name, quantity } = req.body;
    const product = await productServices.create({ name, quantity });
    return res.status(201).json(product);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
}

module.exports = create;
