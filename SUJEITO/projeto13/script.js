var area = document.getElementById('area')

function entrar(){
    var nome = prompt("digite seu nome")
    if(nome === '' || nome === null){
        alert('opa algo deu errado')
        area.innerHTML = 'click no botão para acessar...'
    }else{
        area.innerHTML = "bem vindo "+ nome + " " + "<br>"

        let botaosair = document.createElement("button");
        botaosair.innerText = "sair da conta"
        botaosair.onclick = sair

        area.appendChild(botaosair)
    }
}
function sair(){
    alert("Até mais")
    area.innerHTML = "voce saiu"
}