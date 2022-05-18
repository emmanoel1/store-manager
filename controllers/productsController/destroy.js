const productServices = require('../../services/productServices');

async function destroy(req, res) {
    try {
        const { id } = req.params;
        await productServices.destroy(id);
        return res.status(204).end();
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}

module.exports = destroy;
