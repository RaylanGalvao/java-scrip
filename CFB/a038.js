const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

//metodo para pegar os elementos filhos
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)
console.log(caixa1.children[3])
console.log(caixa1.children[caixa1.children.length-1])

// metodo para pegar o no raiz
console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)
console.log(document.getRootNode())