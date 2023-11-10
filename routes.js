let express = require('express');
let router = express.Router();

let noteController = require('./controllers/noteController');
let userController = require('./controllers/userController');

// List of all the routes
router.get('/', (req, res) => {
    res.render('login.ejs');
});
router.get('/register', userController.register);
router.get('/login', userController.login);
router.post('/auth/register', userController.authRegister);
router.post('/auth/login', userController.authLogin);
router.get('/admin', userController.admin);

// router.get('/', userController.login);
// router.post('/login', userController.authenticate);
// notes
router.get('/notes', noteController.index);

module.exports = router;
