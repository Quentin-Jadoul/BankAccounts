let Note = require('../models/noteModel');
let db = require('../db');

// exports.home = function (req, res) {
//     res.render('login.ejs', {message: ''});
// }

exports.index = function (req, res) {
    res.render('notes.ejs', {message: ''});
}

