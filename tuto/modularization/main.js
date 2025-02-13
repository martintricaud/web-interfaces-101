// import {d} from './utilities.js'

//d("h1").style.color="red"

// FONCTION CUSTOM POUR ACCEDER A UN
// ELEMENT AVEC UNE SYNTAXE PLUS COURTE
function d(query){
    return document.querySelector(query)
}

// FONCTION CUSTOM POUR CHANGER LE STYLE D'UN 
// ELEMENT AVEC UNE SYNTAXE PLUS COURTE
function setStyle(query, style){
    document.querySelector(query).style=style
}

//Au lieu de devoir écrire tout ça
document.querySelector("h1").style.color="red"

//J'ai juste besoin d'appeler ma fonction setStyle
setStyle("h1", "color: red");

// FONCTION CUSTOM POUR GREFFER UN ELEMENT
function greffe(element, parent){
    document.querySelector(parent).appendChild(element)
}

let el = document.createElement("h3").innerText="Hello World"

greffe(el, "body")