function pedir(){
    var valor = prompt("digite um valor de 1 a 4")
    switch (Number(valor)){
        case 1:
            alert("voce escolheu 1 = suco")
            break
        case 2:
            alert("voce escoolheu 2 =  agua gelada")
            break
        case 3:
            alert("voce escoolheu 3 =  sorvete")
            break
        case 4:
            alert("voce escoolheu 4 =  chamou o garçom")
            break
        default:
            alert("escolha a opção entre 1 e 4")
            break
    }
}