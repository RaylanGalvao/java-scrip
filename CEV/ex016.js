// function soma(n1, n2){
//     return n1+n2
// }
// let res = soma(10, 20)
// console.log(res)

// function parimp(n){
//     if (n%2 == 0){
//         return 'par'
//     }else{
//         return 'impar'
//     }
// }
// let res=parimp(4)
// console.log(res)

// let v = function(x){
//     return x*2
// }

// console.log(v(50))

// function fatorial(n){
//     let fat = 1
//     for (let c = n; c > 1; c--){
//         fat *= c
//     }
//     return fat
// }

// console.log(fatorial(5))

function fatorial(n){
    if (n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))