"use strict"

function teste(){
    let nome="caneta"
    if(true){
        console.log("dentro do if: " + nome)        
    }
    console.log("dentro da funcao: " + nome)
}

teste()

console.log("fora de teste: " + nome)