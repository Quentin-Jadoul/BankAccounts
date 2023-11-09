let User = require('../models/userModel');
let db = require('../db');

// exports.home = function (req, res) {
//     res.render('login.ejs', {message: ''});
// }

exports.login = function (req, res) {
    res.render('login.ejs', {message: ''});
}

exports.register = function (req, res) {
    res.render('register.ejs', {message: ''});
}

