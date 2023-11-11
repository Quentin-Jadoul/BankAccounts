// Import express
let express = require('express');
let router = require('./routes');
// const https = require('https');
// const fs = require('fs');
// Initialize the app
let app = express();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
//setting middleware
app.use(express.static('public'));
const path = require('path');

const publicDir = path.join(__dirname, './public');


// const options = {
//     key: fs.readFileSync('/home/rpi2/sudotest/website2/private.key'),
//     cert: fs.readFileSync('/home/rpi2/sudotest/website2/certificate.crt'),
//     passphrase: 'manuallyresurectprocesses'
//   };



app.use(express.static(publicDir));

// Send message for default URL
app.use('/note', router)
let port = 3001;
// const server = https.createServer(options, app);
const server = app.listen(port);

// Setup server port

// Launch app to listen to specified port
// server.listen(port, function () {
// console.log('Server running on port ' + port);
// });
