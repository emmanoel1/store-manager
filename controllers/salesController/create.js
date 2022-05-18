const saleServices = require('../../services/saleServices');

async function create(req, res) {
    try {
        const id = await saleServices.create(req.body);

        const msg = {
          id,
          itemsSold: req.body,
        };

        return res.status(201).json(msg);
      } catch (err) {
        throw new Error();
      }
}

module.exports = create;
