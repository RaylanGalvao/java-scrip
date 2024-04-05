let pessoa = {
    nome: "jose",
    idade: 15,
    altura: 1.50,
    cargo: "ceo"
}
// console.log(pessoa.nome)
// console.log(pessoa.cargo)

// console.log(pessoa.idade)
// const {nome ,cargo, idade, altura} = pessoa
// console.log(nome)
// console.log(altura)
// console.log(cargo)
// console.log(idade)
// const {idade:idadeNova}=pessoa
// console.log(idadeNova)
// const idadeVelha = idadeNova
// console.log(idadeVelha)
// console.log(pessoa)

let nomes = ["jose", "souza", "galvao", "silva", "santos", "pereira"]

// let {0:jose, 2:galvao, 1:souza} = nomes

// console.log(nomes)
// console.log(jose)
// console.log(souza)

let [{},{},{},quartoNome, quintoNome] = nomes

console.log(quartoNome)
console.log(quintoNome)