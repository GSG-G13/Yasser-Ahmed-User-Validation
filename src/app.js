const express = require('express');
const routes = require('./routes/routes');
const compression = require('compression');
const path = require('path');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(routes);

module.exports = app;