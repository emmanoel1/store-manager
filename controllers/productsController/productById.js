const productServices = require('../../services/productServices');

async function productById(req, res) {
    try {
      const { id } = req.params;
      const resultData = await productServices.getById(id);
  
      return res.status(200).json(resultData);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
  
module.exports = productById;
