// Import du module "dayjs" pour la gestion des dates
const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

// liste des étudiants
const students = [
  { name : "Sonia", birth : "2019-14-05"},
  { name : "Antoine", birth : "2000-12-05"},
  { name : "Alice", birth : "1990-14-09"},
  { name : "Sophie", birth : "2001-10-02"},
  { name : "Bernard", birth : "1980-21-08"}
];

// Fonction pour formater les dates d'anniversaire en français
function formatFrenchDate(date) {
  return dayjs(date).locale('fr').format('DD MMMM YYYY');
}

/* Fonction permettant d'ajouter un étudiant (Objet avec un nom et une date de naissance) */
function addStudent(name, birthdate){
  // Formater la date de naissance 
  const formattedBirthdate = dayjs(birthdate).format('LL');

  // Ajouter l'étudiant au tableau
  students.push({name, birthdate});
}

/* Fonction pour récupérer la liste des étudiants 
 - retourne le tableau students*/
function getStudents(){
  return students;
}

 /* Fonction pour supprimer un étudiant du tableau
  - utilise l'indes de l'étudiant*/
function deleteStudent(index){
  if(index >= 0 && index < students.length){
    students.splice(index, 1);
  }
}

/* Export des fonctions */
module.exports = {addStudent, getStudents, deleteStudent};