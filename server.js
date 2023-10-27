const express = require('express');

// express app
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// je récupère les fonctions du fichier "utils.js"
const {addStudent, getStudents, deleteStudent} = require('./utils');

// Configuration d'EJS comme moteur de vue
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'));
//app.use(express.static(path.join(__dirname, 'assets')));

// Port d'écoute du serveur
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Get Home page
app.get('/', (req, res) => {
  // send set automatically the type of content we send back
  //res.send('<p>home page</p>'); 
  res.sendFile('./views/home.html', {root : __dirname}); // __dirname correspond à la racine du projet (la ou se trouve le fichier app.js)
});

// 404 page (METTRE LA FONCTION USE A LA FIN SINON LES GET D'APRES NE MARCHERONT PAS)
app.use((req, res) => {
  res.sendFile('./views/404.html', {root: __dirname});
})

/* ---------------------- */
// // Routes
// app.get('/', (req, res) => {
//   // switch pour définir la page html en fonction de l'url
//   let viewPath = './views/';
//   switch (req.url) {
//     // home page
//     case '/':
//       viewPath += 'home.html';
//       res.statusCode = 200; //status code ok
//       break;
//     // page non existante
//     default:
//       viewPath += '404.html';
//       res.statusCode = 404; // status code erreur
//       break;
//   }
//   res.render(viewPath);
// });

// app.post('/add', (req, res) => {
//   const { name, birthdate } = req.body;
//   addStudent(name, birthdate);
//   res.redirect('/users');
// });

// app.get('/users', (req, res) => {
//   const students = getStudents(); // Assurez-vous d'importer getStudents depuis "utils.js"
//   res.render('users', { students });
// });

/* ---------------------- */

