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
app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'public', 'error', '500.html'));
    
  });
app.use((req, res) => {
    res
        .status(404)
        .sendFile(path.join(__dirname, '..', 'public', 'html', '404.html'));
});

module.exports = app;