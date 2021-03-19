const path = require('path');
const morgan = require('morgan');
const express = require('express');
const session = require('express-session');

/**
 * CONSTANTS
 */
const PORT = process.env.PORT || 8080;
const MAX_COOKIE_AGE = 24 * 60 * 60 * 1000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const JS_DIR = path.join(__dirname, 'public', 'js');
const STYLES_DIR = path.join(__dirname, 'public', 'css');
const PAGES_DIR = path.join(__dirname, 'public', 'pages');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');

/**
 * START EXPRESS
 */
const app = express();

/**
 * CREATE MIDDLEWARE
 */
app.use(morgan('tiny'));
app.set('view engine', 'ejs');

/**
 * APP CONFIGURATION
 */
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: 'none',
            httpOnly: true,
            secure: true,
            maxAge: MAX_COOKIE_AGE,
        },
    }),
);

app.use(express.static(JS_DIR));
app.use(express.static(PAGES_DIR));
app.use(express.static(PUBLIC_DIR));
app.use(express.static(IMAGES_DIR));
app.use(express.static(STYLES_DIR));

/**
 * ROUTES
 */
const checkoutRoute = require('./routes/checkout');
const errorRoute = require('./routes/error');

/**
 * MIDDLEWARE FOR EXPRESS
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * ROUTES MATCHERS
 */
app.use('/checkout', checkoutRoute);
app.use('*', errorRoute);

/**
 * START SERVER
 */
app.listen(PORT, () => {
    console.log(`🚀 Local server has started on port ${PORT} => http://localhost:${PORT}`);
});
