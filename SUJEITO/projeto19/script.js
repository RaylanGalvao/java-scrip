var data = new Date()
// console.log(data.getHours())
// console.log(data.getDay())
// console.log(data.getMinutes())
// console.log(data.getSeconds ())
// console.log(data.getMilliseconds())

// console.log("Data de hoje: "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear())

// data.setDate(data.getDate()+5)
// console.log("Data de hoje: "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear())

// data.setMonth(data.getMonth()+5)
// console.log("Data de hoje: "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear())

data.getDay()

var dias=['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']

console.log(dias[data.getDay()])

console.log("Data de hoje: "+dias[data.getDay()]+"/"+(data.getMonth()+1)+"/"+data.getFullYear())