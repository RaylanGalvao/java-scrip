let num = [5,8,2,9,3]
// num.sort()
// console.log(`O vetor tem ${num} posições`)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(num[0])

// for (let i=0; i<=4; i++){
//     console.log(num[i])
// }

for (let pos in num){
    console.log(num[pos])
}

let ponteiro = num.indexOf(8)
console.log(ponteiro)