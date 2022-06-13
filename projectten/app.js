const numbers=[1,2,3,"*",4,5,6,"/",7,8,9,".",0,"+","-"]
const keys=document.querySelectorAll(".keys")
const question=document.querySelector(".question")
const equals=document.querySelector("#equals")
const deleteno=document.querySelector("#delete")
const clear=document.querySelector("#clear")
keys.forEach((key,index)=>{
 
    question.textContent;
    key.addEventListener("click",(e)=>{
      
        let x=e.currentTarget
        for (let i = 0; i < numbers.length; i++) {
            key= numbers[index];
        }
        question.textContent+=key
       
    })
    clear.addEventListener("click",()=>{
         question.textContent=""
       
     })
     deleteno.addEventListener("click",deletenos
     
     )

   equals.addEventListener("click",()=>{
      question.textContent= eval(question.textContent)
   })
    
})

function deletenos(params) {
    z=question.textContent
   u=z.length-1
   z=z.slice(0,u)
   question.textContent=z

   
}
