function mediaAluno(nota1, nota2){
    var media = (nota1+nota2)/2

    if(media >=7){
        console.log("aluno aprovado com a media: " + media)
    }else {
        console.log("aluno reprovado com a media: " + media)
    }
}

function aluno(nome, curso){
    var msg = "seja bem vindo " + nome +" Ao curso de "+ curso
    console.log(msg)
}