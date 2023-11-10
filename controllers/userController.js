let User = require('../models/userModel');
let db = require('../db');
const jwt = require('jsonwebtoken');


// exports.home = function (req, res) {
//     res.render('login.ejs', {message: ''});
// }

exports.login = function (req, res) {
    res.render('login.ejs');
}

exports.register = function (req, res) {
    res.render('register.ejs');
}


exports.authRegister = function (req, res) {
    // check if username already exists
    let username = req.body.username;
    let password = req.body.password;
    let query = "SELECT * FROM users WHERE username = '" + username + "';";
    db.query(query, function (err, result) {
        if (err) throw err;
        // console.log(result);
        if (result.length == 0) {
            // if username does not exist, create new user
            let user = new User(username, password, 'user');
            let query = "INSERT INTO users (username, password, role) VALUES ('" + user.username + "', '" + user.password + "', '" + user.role + "');";
            db.query(query, function (err, result) {
                if (err) throw err;
                // console.log(result);
                res.redirect('/login');
            });
        } else {
            // if username already exists, redirect to register page
            res.redirect('/register');
        }
    });
}

exports.authLogin = function (req, res) {
    // check if username and password match
    let username = req.body.username;
    let password = req.body.password;
    let query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "';";
    db.query(query, function (err, result) {
        if (err) throw err;
        // console.log(result);
        if (result.length == 1) {
            // if login success, redirect to home page
            let token = jwt.sign({ username: username, role: result[0].role }, 'secretKey');
            res.cookie('token', token);
            res.redirect('/notes');
        } else {
            // if login failed, redirect to login page
            res.redirect('/login');
        }
    });
}

exports.admin = function (req, res) {
    // check if user is admin
    let token = req.cookies.token;
    let decoded = jwt.decode(token);
    if (decoded.role == 'admin') {
        // if admin, show admin page
        res.render('admin.ejs');
    } else {
        // if not admin, redirect to login page
        res.redirect('/notes');
    }
}



