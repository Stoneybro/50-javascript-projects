const  btn=document.querySelector(".btn")
const wrapper=document.querySelector(".wrapper")
const list=document.querySelector("ul")

btn.addEventListener("click",(e)=>{
    e.currentTarget.classList.toggle("active")
    wrapper.classList.toggle("active")
    list.classList.toggle("active")
})