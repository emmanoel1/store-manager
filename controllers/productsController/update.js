const productServices = require('../../services/productServices');

async function update(req, res) {
    try {
        const { id } = req.params;
        const { name, quantity } = req.body;
        const product = { id, name, quantity };

        await productServices.update(product);
        return res.status(200).json(product);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

module.exports = update;
