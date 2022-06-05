const smallbottle=document.querySelectorAll(".smallbottle")
const smallbottles=document.querySelector(".smallbottles")
const percentage=document.querySelector(".percentage")
const flexbottle=document.querySelector(".flexbottle")

function work(x) {
 smallbottle.forEach((small,index2)=>{
    if (x>=index2) {
        small.classList.add("full")
        percentage.style.opacity="1"
    }else{small.classList.remove("full")}
   
 })
  
}
smallbottle.forEach((small,index)=>{
    
    small.addEventListener("click",()=>{
       work(index)
       console.log(index);
       percentage.style.height=`${(index+1)*12.5}%`
       percentage.innerHTML=`${(index+1)*12.5}%`
        flexbottle.innerHTML=`<h2 id="liters"><br>${2-((index+1)*0.25)}L<br><small >remained</small></h2>`
        
    })
   
    
})


