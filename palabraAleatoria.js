const pal = "pk" //palabra a adivinar
const longPal = 8
const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];

function RandomChar(letras) {
    var pasar = Math.floor(Math.random() * letras.length)
    azar = letras[pasar]
    return azar
}

function RandomLength(longPal) {
    var longPal = Math.floor(Math.random() * longPal)
    return longPal
}

function RandomWord(longPal){
    var wordLength = RandomLength(longPal)
    var word = ""
    for(w=0; w<wordLength;w++){
        word = word + RandomChar(letras)
    }
    return word
}

//console.log(RandomWord(longPal))

module.exports = RandomWord(8)