const path = require('path');
const morgan = require('morgan');
const express = require('express');

/**
 * CONSTANTS
 */
const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, 'public');
const JS_DIR = path.join(__dirname, 'public', 'js');
const STYLES_DIR = path.join(__dirname, 'public', 'css');
const PAGES_DIR = path.join(__dirname, 'public', 'pages');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const ERROR_404 = path.join(__dirname, 'public', 'pages', '404.html');

/**
 * START EXPRESS
 */
const app = express();

/**
 * CREATE MIDDLEWARE
 */
morgan((tokens, req, res) => [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
].join(' '));
app.use(morgan('combined'));

/**
 * APP CONFIGURATION
 */

/**
 * ROUTES
 */
const checkoutRoute = require('./routes/checkout');

/**
 * MIDDLEWARE FOR EXPRESS
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/checkout', checkoutRoute);

app.use(express.static(JS_DIR));
app.use(express.static(PAGES_DIR));
app.use(express.static(PUBLIC_DIR));
app.use(express.static(IMAGES_DIR));
app.use(express.static(STYLES_DIR));
app.get('*', (req, res) => {
    res.sendFile(ERROR_404);
});

/**
 * START SERVER
 */
app.listen(PORT, () => {
    console.log(`🚀 Local server has started on port ${PORT} => http://localhost:${PORT}`);
});
