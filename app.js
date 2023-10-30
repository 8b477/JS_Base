// Créez un programme qui permet d’ajouter un élément à une liste lorsque l’on clique
// sur un bouton.

let buttonAdd = document.getElementById("buttonAdd"); //target Button

console.log(list, buttonAdd);

buttonAdd.addEventListener("click", function(e){
    let list = document.getElementById("list"); //target List
    let newLi = document.createElement("li");
    e.preventDefault()
    list.appendChild(newLi);
    newLi.textContent = "new"
})


