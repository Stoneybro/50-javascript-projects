const label=document.querySelectorAll(".form-control label")
console.log(label);

label.forEach((labels) => {
    labels.innerHTML=labels.textContent.split("").map((x,index)=>`<span Style="transition-delay:${index*50}ms">${x}</span>`).join("")
    
  
});