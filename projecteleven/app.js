let filterinput=document.getElementById("filterinput")
let ul=document.getElementById("names")
let li=ul.querySelectorAll("li.collection-item a")
let list=ul.querySelectorAll("li.collection-item")
filterinput.addEventListener("keyup",filternames)

function filternames(params) {
    let filtervalue=filterinput.value.toUpperCase()
   li.forEach(a => {
       if (a.innerHTML.toUpperCase().indexOf(filtervalue)>-1) {
           li.style.display=""
       }else{li.style.display="none"}
   });


}