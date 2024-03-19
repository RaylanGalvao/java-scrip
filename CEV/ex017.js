let amigo = {
    nome:'jose',
     sexo:'M',
      peso:85.4,
       engorda(p=0){
            console.log('engordou')
            this.peso += p
       }
    }
console.log(amigo.peso)