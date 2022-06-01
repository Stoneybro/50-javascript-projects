const smallbottle=document.querySelectorAll(".smallbottle")
const smallbottles=document.querySelector(".smallbottles")
const percentage=document.querySelector(".percentage")


function work(x) {
 smallbottle.forEach((small,index2)=>{
    if (x>=index2) {
        small.classList.add("full")
    }else{small.classList.remove("full")}

 })
  
}
smallbottle.forEach((small,index)=>{
    
    small.addEventListener("click",()=>{
       work(index)
       console.log(index);
       percentage.style.height=`${(index+1)*20}%`
    })
   
    
})


