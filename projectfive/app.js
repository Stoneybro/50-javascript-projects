const box=document.querySelector(".box")
const span=document.querySelector("span")

box.addEventListener("click",(e)=>{
    e.currentTarget.classList.toggle(".active")
    
})