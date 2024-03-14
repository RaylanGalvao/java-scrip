const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

console.log(c1_2)
console.log(c1_2.parentElement)
console.log(c1_2.parentNode)
console.log(c1_2.parentNode.parentNode)
console.log(c1_2.parentNode.parentNode.children[4])

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

if(btn_c[0].children.length > 0){
    console.log("possui filhos")
}else {
    console.log("nao possui filhos")
}

console.log(caixa1.children.length > 0 ? "possui filhos" : "nao possui filhos")

console.log(caixa1.firstElementChild.innerHTML="TESTE 1")
console.log(caixa1.children[3].innerHTML="TESTE 2")


// metodo para pegar os elementos filhos
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)
// console.log(caixa1.children[3])
// console.log(caixa1.children[caixa1.children.length-1])

// metodo para pegar o no raiz
// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)
// console.log(document.getRootNode())