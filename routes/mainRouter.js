const express = require("express");
const mainRouter = express.Router();
const bodyParser = require("body-parser");

mainRouter.use(bodyParser.json());

mainRouter.get('/', (req, res) => {
    res.render('home.hbs', { });
});

mainRouter.get('/robots.txt', (req, res) => {
    res.redirect('/pages/robots.txt');
});

module.exports = mainRouter;
