const num=document.querySelectorAll(".container>div")
const next=document.querySelector("#next")
const prev=document.querySelector("#prev")
const progress=document.querySelector(".container::after")
let count=1


next.addEventListener("click",()=>{
    count++
    if (count>num.length) {
        count=num.length
    }
    update()
})
prev.addEventListener("click",()=>{
    count--
    if (count<1) {
        count=1
    }
    update()
})
function update() {
    num.forEach((numbers,indx)=>{
        if (indx<count) {
            numbers.classList.add("active")
        }else{numbers.classList.remove("active")}
    })
    console.log(count);
    if (count===1) {
        prev.disabled=true
    }else if (count===num.length) {
        next.disabled=true
        prev.disabled=false
    }else{
        next.disabled=false
        next.disabled=false
    }
}