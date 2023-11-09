// Import express
let express = require('express');
// let session = require('express-session');
let router = require('./routes');
// Initialize the app
let app = express();
app.use(express.urlencoded({extended: true}));
// app.use(session({
//     secret: 'my secret',
//     resave: false,
//     saveUninitialized: true
// }));
// Send message for default URL
app.use('/', router)
// Setup server port
let port = 8000;
// Launch app to listen to specified port
app.listen(port, function () {
console.log('Server running on port ' + port);
});
//setting middleware
app.use(express.static('public'));



// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 3000;

// // Utilisateur fictif
// const users = {
//   'john_doe': {
//     'username': 'john_doe',
//     'password': 'secure_password'
//   },
//   'test': {
//     'username': 'test',
//     'password': 'secure_password'
//   },
//   'test2': {
//     'username': 'test2',
//     'password': 'secure_password'
//   }
// };

// // Fonction pour générer un token JWT
// function generateToken(username) {
//   const payload = { 'username': username };
//   return jwt.sign(payload, 'your_secret_key', { algorithm: 'HS256' });
// }

// // Middleware pour parser le JSON
// app.use(express.json());

// // Route pour l'authentification
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Vérifier les informations d'identification (simplifié pour l'exemple)
//   if (users[username] && users[username].password === password) {
//     const token = generateToken(username);
//     return res.json({ 'token': token });
//   } else {
//     return res.status(401).json({ 'message': 'Échec de l\'authentification' });
//   }
// });

// // Route sécurisée nécessitant un token valide
// app.get('/secure', (req, res) => {
//     const token = req.headers.authorization;
  
//     if (!token) {
//       return res.status(401).json({ 'message': 'Token missing' });
//     }
  
//     try {
//       // Decode the token without verifying the signature
//       const payload = jwt.decode(token, { complete: true, noVerify: true });
      
//       // Add a log to print the decoded payload
//       console.log("Decoded Payload:", payload);
  
//       return res.json({ 'message': `Welcome, ${payload.payload.username}!` });
//     } catch (error) {
//       console.log("Error decoding token:", error);
//       return res.status(401).json({ 'message': 'Invalid token' });
//     }
//   });
  

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// app.get('/', (req, res) => {
//     res.render('login.ejs', { title: 'Test' });
// });
