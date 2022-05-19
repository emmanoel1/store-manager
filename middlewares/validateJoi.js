const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../statusCode');

const validadeArray = (body) => {
    if (body === Array.isArray()) return body;
    const newBody = [body];
    return newBody;
};

const validateJoi = (schemas) => (req, _res, next) => {
    const bodyArray = validadeArray(req.body);
    bodyArray.forEach((element) => {
    const { error } = schemas.validate(element);

    if (error) {
    switch (error.details[0].type) {
        case 'any.required':
            next({ status: BAD_REQUEST, message: error.details[0].message });
            break;
        case 'string.min':
            next({ status: UNPROCESSABLE_ENTITY, message: error.details[0].message });
            break;
        case 'number.min':
            next({ status: UNPROCESSABLE_ENTITY, message: error.details[0].message });
            break;
        default:
    }
}
}); next();
};

module.exports = validateJoi;