/*
2. En reprenant le code précédent, permettre à l’utilisateur d’écrire l’élément à l’aide
d’un input.
*/

let buttonAdd = document.getElementById("buttonAdd"); //target Button

let input = document.querySelector("input")//recover value of input


buttonAdd.addEventListener("click", function(e){
    e.preventDefault()
    let newLi = document.createElement("li");
    if(input.value !== ""){
        newLi.textContent = input.value
    }
    else{
        return alert("Veuillez remplir le champ !")
    }

    let list = document.getElementById("list"); //target List

    list.appendChild(newLi);
})
