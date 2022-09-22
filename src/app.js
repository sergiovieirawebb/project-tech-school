require('express-async-errors');
const express = require('express');
const routes = require('./routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

module.exports = app;
