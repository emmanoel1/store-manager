const express = require('express');

require('dotenv').config();

const route = require('./Routes');

const asyncFix = require('./middlewares/asyncFix');

const errorMid = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(route);
app.use(asyncFix);
// não remova esse endpoint, e para o avaliador funcionar *
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMid);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
