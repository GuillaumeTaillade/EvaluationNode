const express = require('express');

// express app
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// je récupère les fonctions du fichier "utils.js"
const {addStudent, getStudents, deleteStudent, formatFrenchDate} = require('./utils');

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
  res.sendFile('./views/home.html', {root : __dirname}); // __dirname correspond à la racine du projet (la ou se trouve le fichier server.js)
});

app.post('/add', (req, res) => {
  console.log("server --> action Post");
  const {name, birth} = req.body;

  // j'envoie les nouvel étudiant dans le tableau
  addStudent(name, birth);
  console.log("server --> action Post effectué");
  // j'affiche les étudiants
  for(let i = 0; i < getStudents.length; i++){
    console.log("Etudiant [" + i + "] " + getStudents[i].name +" / " + getStudents[i].birth);
  }
  // je redirige l'utilisateur a la homepage
  res.redirect('/');
});

app.get('/users', (req, res) => {
  res.render('users', { students, formatFrenchDate });
});

app.get('/delete/:index', (req, res) => {
  const { index } = req.params;
  if (index >= 0 && index < students.length) {
      students.splice(index, 1);
  }
  res.redirect('/users');
});

// 404 page (METTRE LA FONCTION USE A LA FIN SINON LES GET D'APRES NE MARCHERONT PAS)
app.use((req, res) => {
  res.sendFile('./views/404.html', {root: __dirname});
})

