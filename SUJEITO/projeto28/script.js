
// // let lista = ["jose", "souza", "galvao"]

// // lista.map((item, index)=>{
// //     console.log(`passando ${item} - Está na posição ${index}`)
// // })


let numeros = [5,3,2,5]
let total = numeros.reduce((acumulador, numero, indice, original)=>{
    
    console.log(`${acumulador} - Total ate o momento`)
    console.log(`${numero} - Valor atual`)
    console.log(`${indice} - Indice original`)
    console.log(`${original.length} - Array original`)
    console.log("====================================")

    return acumulador=acumulador+numero
})
console.log("............................................")
console.log("TOTAL DO REDUCE: "+total)


// //FIND
// // let listagem = [5,3,"jose",2,"galvao"]
// // let busca = listagem.find((item)=>{
// //     if(item === "jose"){
// //         return console.log("item encontrado com sucesso")
// //     }
// // })

// // console.log(busca)

// // FILTER

// let palavra = ["jose", "souza", "galvao", "sujeito programador", "fullStack"]

// let resultado = palavra.filter((item)=>{
//     return item.length <= 10
// })

// console.log(resultado)