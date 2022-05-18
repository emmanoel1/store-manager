require('express-async-errors');

const asyncFix = (_err, _req, res, _next) =>
res.status(500).json({ message: 'Ops algo deu errado!' });

module.exports = asyncFix;
