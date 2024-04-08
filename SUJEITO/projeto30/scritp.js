function somar(a, b){
    let total = a + b
    console.log(total)
}
somar(15,10)

let subtrair = (c, d)=>{
    let resto = c - d
    return resto
}
console.log(subtrair(50, 10))

let numeros = [1,3,5,10]

numeros.map((item)=>{
    console.log(item)
})