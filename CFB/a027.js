// function* cores(){
//     yield 'vermelho'
//     yield 'verde'
//     yield 'azul'
// }
// let itc=cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

function* perguntas(){
    const nome=yield 'qual seu nome?'
    const esporte=yield 'qual seu esporte favorito?'
    return "seu nome e: "+ nome + ', seu esporte favorito e: '+ esporte
}
const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next('bruno').value)
console.log(itc.next('natacao').value)

