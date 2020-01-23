const Joi = require('joi')
const express = require('express')
const app = express()

// tableau de ma todo (sans bdd)
const todolists = [
  {id: 1, name: 'test1',done: true},
  {id: 2, name: 'test2',done: false},
  {id: 3, name: 'test3',done: true}
];

app.use(express.static('./public'))
app.use(express.json());

/**====================================================================================================
 * GET 
====================================================================================================*/
// affiche toute les taches
app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

/* affiche toute les todolists */
app.get('/api/todolists', (req, res) => {
  res.send(todolists);
});

/*  affiche la todo avec l'id en paramètre  */
app.get('/api/todolists/:id', (req, res) => {
  const todolist = todolists.find( c => c.id === parseInt(req.params.id));
  if(!todolist) res.status(404).send('manque id');
  res.send(todolist);
});

/**====================================================================================================
 * POST
====================================================================================================*/
app.post('/api/todolists', (req, res) => {
  const { error } = validateTodolist(req.body); 

  if (error){ // !req.body.name || req.body.name.length < 3
    res.status(400).send(error.details[0].message)
    return;
  }

  const todolist = {
      id: todolists.length + 1,
      name: req.body.name,
      done : true
    };

    todolists.push(todolist);
    console.log(todolists.length, 'valeur dans le tableau todoLists');
    console.log('=== ',todolists );
    res.send(todolist)
});

/**====================================================================================================
 * PUT 
====================================================================================================*/
app.put('/api/todolists/:id', (req, res) => {

  const todolist = todolists.find( c => c.id === parseInt(req.params.id));

  if(!todolist){
    res.status(404).send('manque id');
    return;
  } 

  const { error } = validateTodolist(req.body); 

  if (error){ // !req.body.name || req.body.name.length < 3
    res.status(400).send(error.details[0].message)
    return;
  }

  todolist.name = req.body.name;
  todolist.done = !!req.body.done;
  console.log("id :  " +  req.params.id + " mis a jour ");
  res.send(todolist)
});


/**====================================================================================================
 * API DELETE - Supprime une tache 
====================================================================================================*/
app.delete('/api/todolists/:id', (req, res) => {

  const todolist = todolists.find( c => c.id === parseInt(req.params.id));
  // si il na pas d'id, erreur 404
  if(!todolist){
    res.status(404).send('manque id');
  } 

  // La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
  const index = todolists.indexOf(todolist);
  // splite permet de diviser une chaine à partir d'un séparateurs
  todolists.splice(index, 1);
  // return la list du tableau
  console.log("id :  " +  req.params.id + " ========== element supprimer ");
  res.send(todolist)
});

/**====================================================================================================
 * Function de validation
 * Il vérifie que il faut au minimum 3 caractère
====================================================================================================*/
function validateTodolist(todolist){

  const schema = {
    // il faut que le name, a minimum 3 caractère
    name: Joi.string().min(3).required()
  }
  return Joi.validate(todolist, schema);
}








/**==================================================
 * >>>>>> CONNEXION AU SERVEUR 
==================================================*/
const port = 1472;
hostname = 'localhost'; 
app.listen(port, hostname, function () {
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n");
})
