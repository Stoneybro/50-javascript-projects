const num=document.querySelectorAll(".container>div")
const next=document.querySelector("#next")
const prev=document.querySelector("#prev")
const progress=document.querySelector(".container::after")
let count=1

if (count>num.length) {
    count=num.length
}else if (count<1) {
    count=1
}
next.addEventListener("click",()=>{
    count++
    update()
})
prev.addEventListener("click",()=>{
    count--
    update()
})
function update() {
    num.forEach((numbers,indx)=>{
        if (indx<count) {
            numbers.classList.add("active")
        }else{numbers.classList.remove("active")}
    })
 const active=document.querySelectorAll(".active")
    progress.style.width="100px"
}