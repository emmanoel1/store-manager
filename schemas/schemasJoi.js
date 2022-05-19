const Joi = require('joi');

const validateProduct = Joi.object({
    name: Joi.string().min(5).required(),
    quantity: Joi.number().min(1).required(),
});

const validateSale = Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().min(1).required(),
});

module.exports = {
    validateProduct,
    validateSale,
};
