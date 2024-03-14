var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)

if(hora < 4){
    console.log("boa madrugada")
}
else if (hora < 12){
    console.log("boa dia")    
}
else if (hora < 18){
    console.log("boa tarde")    
}
else{
    console.log("boa noite")    
}