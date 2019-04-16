// Tableau des languages
var languages = ['Javascript', 'PHP', 'MySQL', 'C-Sharp', 'Html', 'CSS'];
//dans la variable index, je recupere l'index de 'C-Sharp'
index = languages.indexOf('C-Sharp');
// j'affiche le message en html
document.getElementById('list').innerHTML= 'Dans le tableau suivant  [' + languages + ']' +',';
document.getElementById('result').innerHTML= 'l\'index de C\-Sharp est ' + index + ', car il se trouve en position ' + (index + 1) + '.';