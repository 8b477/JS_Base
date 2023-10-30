/*
3. Créez le programme permettant
d’ajouter des articles dans un panier. Il
faut pouvoir calculer le total des achats
en temps réel.
*/

let buttonAdd = document.getElementById("buttonAdd") //target Button

let inputText = document.querySelector("input[type=text]") //recover value of input text
let inputNumb = document.querySelector("input[type=number]") //recover value of input number

let total = document.getElementById("total")//recover span for display total

let numbs = parseInt(0)

buttonAdd.addEventListener("click", function(e){
    e.preventDefault()
    let newLi = document.createElement("li");
    if(inputText.value !== ""){
        newLi.textContent = inputText.value
    }
    else{
        return alert("Veuillez remplir le champ !")
    }

    let list = document.getElementById("list") //target List

    list.appendChild(newLi)
    inputText.value = ""

    numbs += parseInt(parseInt(parseInt(inputNumb.value)))

    total.innerHTML = numbs

})

