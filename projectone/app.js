const images=document.querySelectorAll(".image")


images.forEach(pics => {
    pics.addEventListener("click",e=>{
        let tap=e.currentTarget
  
        tap.classList.toggle("active")
    })
});