let express = require('express');
let router = express.Router();

let noteController = require('./controllers/noteController');
let userController = require('./controllers/userController');

// List of all the routes
router.get('/', userController.login);
router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;
