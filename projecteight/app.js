const smallbottle=document.querySelectorAll(".smallbottle")
const smallbottles=document.querySelector(".smallbottles")


smallbottle.forEach((small,index)=>{
    
    small.addEventListener("click",(e)=>{
        e.currentTarget.classList.toggle("full")
        const x=smallbottles.children
        x.forEach((work)=>{
            if (work.classList.contains("full")) {
                console.log("g");
            }
        })
      
        
    })
})
