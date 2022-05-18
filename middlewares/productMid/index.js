const Joi = require('joi');

const NAME_REQUIRED = '"name" is required';
const NAME_MIN_LENGTH_REQUIRED = '"name" length must be at least 5 characters long';
const QUANTITY_REQUIRED = '"quantity" is required';
const MIN_QUANTITY_REQUIRED = '"quantity" must be greater than or equal to 1';

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

async function productMid(req, res, next) {
  const { error } = productSchema.validate(req.body);

  if (!error) return next();

  const middleValidations = {
    [NAME_REQUIRED]:
    () => res.status(400).json({ message: NAME_REQUIRED }),
    [NAME_MIN_LENGTH_REQUIRED]:
    () => res.status(422).json({ message: NAME_MIN_LENGTH_REQUIRED }),
    [QUANTITY_REQUIRED]:
    () => res.status(400).json({ message: QUANTITY_REQUIRED }),
    [MIN_QUANTITY_REQUIRED]:
    () => res.status(422).json({ message: MIN_QUANTITY_REQUIRED }),
    DEFAULT:
    () => { throw new Error(); },
  };
  return (middleValidations[error.message] || middleValidations.DEFAULT)();
}

module.exports = productMid;
