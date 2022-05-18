const Joi = require('joi');

const PRODUCT_ID_REQUIRED = '"productId" is required';
const QUANTITY_REQUIRED = '"quantity" is required';
const MIN_QUANTITY_REQUIRED = '"quantity" must be greater than or equal to 1';

const saleSchema = Joi.array().items(
  Joi.object({
    productId: Joi.required().messages({
      'any.required': PRODUCT_ID_REQUIRED,
    }),
    quantity: Joi.number().min(1).required().messages({
      'number.min': MIN_QUANTITY_REQUIRED,
      'any.required': QUANTITY_REQUIRED,
    }),
  }),
);

async function saleMid(req, res, next) {
    const { error } = saleSchema.validate(req.body);
    if (!error) return next();
    const middleValidations = {
      [PRODUCT_ID_REQUIRED]:
      () => res.status(400).json({ message: PRODUCT_ID_REQUIRED }),
      [QUANTITY_REQUIRED]:
      () => res.status(400).json({ message: QUANTITY_REQUIRED }),
      [MIN_QUANTITY_REQUIRED]:
      () => res.status(422).json({ message: MIN_QUANTITY_REQUIRED }),
      DEFAULT:
      () => { throw new Error(); },
    };

    return (middleValidations[error.message] || middleValidations.DEFAULT)();
}
  
  module.exports = saleMid;
