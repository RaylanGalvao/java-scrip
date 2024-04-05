// // let primeiro = [1,2,3]
// // let numeros = [...primeiro,4,5,10]
// // console.log(numeros)

// let pessoa = {
//     sobrenome:"galvao",
//     peso:70,
// }

// let novaPessoa = {
//     ...pessoa,
//     nome: "souza",
//     idade: 13,
//     altura: 2.00,
//     cargo: "dev junior"
// }
// console.log(novaPessoa)

function novoUsuario(info){
    let data = {
        ...info,
        status: "ativo",
        inico:1/1/2021,
        codigo:564897
    }
    console.log(data)
}

novoUsuario({nome:"jose", sobrenome:"souza", cargo:"dev"})