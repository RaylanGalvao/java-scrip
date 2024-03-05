const dc1=document.getElementById("c1")
const dc1=document.getElementById("c2 ")
const dc1=document.getElementById("c3")
const dc1=document.getElementById("c4")
const dc1=document.getElementById("c5")
const dc1=document.getElementById("c6")

const arrayElementos=[dc1, dc2, dc3, dc4, dc5, dc6]

const colecaoHTML=[...document.getElementsByTagName("div")]
// let colecaoHTML=[document.getElementsByTagName("div")]
// colecaoHTML=[...colecaoHTML]

console.log(colecaoHTML)

colecaoHTML.map((e)=>{
    console.log(e)
})