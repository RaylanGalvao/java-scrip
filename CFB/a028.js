const el=document.getElementsByTagName('div')
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)


// let el=document.getElementsByTagName('div')
// el=[...el]
// el.map((e,i)=>{
//     e.innerHTML="curso"
// })


// const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// cursos.map((el,i)=>{
//     console.log("curso: " + el + " - Posicao do curso: " + i )
// })


// const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// let c=cursos.map((el,i)=>{
//     return el
// })
// console.log(c)



// const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
// let c=cursos.map((el,i)=>{
//     return "<div" +el+" </div>"
// })
// console.log(c)









