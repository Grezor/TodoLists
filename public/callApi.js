// import { func } from "joi";

// const app = document.getElementById('root')

// const container = document.createElement('ul')
// container.setAttribute('id', 'incomplete-tasks')

// app.appendChild(container);
// var serverUrl = 'http://localhost:1472'


// var request = new XMLHttpRequest();
// afficherGlobal();


/**
 * Affiche le tableau de la todolist au chargement
 */
// function afficherGlobal() {

//     var request = new XMLHttpRequest();
//     request.open('GET', serverUrl + '/api/todolists', true);

//     request.onload = function () {
//         var data = JSON.parse(this.response);

//         if (request.status >= 200 && request.status < 400) {
//             statusOk(data)
//         } else {
//             statusError()
//         }
//     }
//     request.send();

// }

/**
 * 
 * @param {*} data est le nom du tableau
 */
// function statusOk(data) {
//     data.forEach(afaire => {
//         const li = document.createElement('li');
//         li.setAttribute('class', 'afaire')

//         const input = document.createElement('INPUT')
//         input.setAttribute("type", "checkbox");

//         const label = document.createElement("LABEL");
//         label.textContent = afaire.name
//         label.setAttribute('class', 'label');

//         const inputText = document.createElement('INPUT')
//         inputText.setAttribute("type", "text");
//         label.setAttribute('class', 'label');

//         const BtnEdit = document.createElement('INPUT')
//         BtnEdit.setAttribute("type", "button");
//         BtnEdit.setAttribute("class", "edit");
//         BtnEdit.setAttribute("value", "EDIT");
//         BtnEdit.setAttribute("id", "edit");
//         // el = BtnEdit.dataset.name
//         // el.dataset.name = "bla";

//         const BtnDelete = document.createElement('INPUT')
//         BtnDelete.setAttribute("type", "button");
//         BtnEdit.setAttribute("class", "delete");
//         BtnDelete.setAttribute("value", "DELETE");


//         container.appendChild(li);
//         li.appendChild(input);
//         li.appendChild(label);
//         li.appendChild(inputText);
//         li.appendChild(BtnEdit);
//         li.appendChild(BtnDelete);
//     });
// }

// function statusError() {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `ERREUR !`;
//     app.appendChild(errorMessage);
// }

// function ajout(taskValue) {
//     var request = new XMLHttpRequest();
//     // requete serveur methode post
//     request.open('POST', serverUrl + '/api/todolists/', true);
//     request.setRequestHeader("Content-Type", "application/json");
//     // l'objet est modifier
//     var obj = { name: taskValue }
//     var jsonObjet = JSON.stringify(obj);
//     // si la requete a le status 200 tu affiche
//     request.send(jsonObjet);

//     // afficherGlobal 
// }

function SupprimerElement() {
    var request = new XMLHttpRequest();
    // requete serveur methode post
    request.open('DELETE', serverUrl + '/api/todolists/', true);
    request.setRequestHeader("Content-Type", "application/json");


    const todolist = todolists.find(c => c.id === parseInt(request.params.id));


    //delete

    // La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
    const index = todolists.indexOf(todolist);
    // splite permet de diviser une chaine à partir d'un séparateurs
    todolists.splice(index, 1);
    // return la list du tableau
    console.log("id :  " + request.params.id + " ========== element supprimer ");
    request.send(todolist)


}

function Edit() {

}

function Update() {

}




