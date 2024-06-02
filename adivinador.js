console.log("hola")

const palabra = "pk" //palabra a adivinar

//const longMin = 2
const longMax = 2
const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];

function RandomChar(letras) {
    var pasar = Math.floor(Math.random() * letras.length)
    azar = letras[pasar]
    return azar
}

function RandomWord(longMax){
    var wordLength = Math.floor(Math.random() * longMax)
    var word = ""
    for(w=0; w<longMax;w++){
        word = word + RandomChar(letras)
    }
    return word
}

console.log(word)

for(i=0;i<1000000;i++){
    var word = RandomWord(longMax)
    console.log("palabra a adivinar: "+palabra)
    console.log("intento "+i.toString() +": "+word)
    if (palabra == word){
        console.log("FOUND IN ATTEMPT: "+ i.toString())
        break
    }
}