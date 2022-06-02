const submit=document.querySelector(".submit>button")
const form=document.querySelector("form")
const output=document.querySelector(".outputs")


window.addEventListener("load",fetchbookmarks)




form.addEventListener("submit",savebookmark)



function savebookmark(e) {
    const sitename=document.getElementById("sitename").value
const url=document.getElementById("siteurl").value
    e.preventDefault()
    let bookmarks={
        name:sitename,
        url:url
    }
    let array=[]
 
    if (localStorage.getItem("array")===null) {
      
        array.push(bookmarks)
        console.log(array);
        localStorage.setItem("array",JSON.stringify(array))
    }else{
       array=JSON.parse(localStorage.getItem("array"))
       console.log(array);
       array.push(bookmarks)
       localStorage.setItem("array",JSON.stringify(array))
    }
    fetchbookmarks()
if (!verification(sitename,url)) {
       return false
}
  
   
}

function verification(sitename,url) {
    if (!sitename||!url) {
        alert("input values")
        return false
    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if (!url.match(regex)) {
  alert("please use a valid address");
  return false
}
return true

}





function deletebutton(url) {
    let array=JSON.parse(localStorage.getItem("array"))
    const x=array.forEach((content) => {
        if (content.url=url) {
            array.splice(content,1)
        }
    });
    localStorage.setItem("array",JSON.stringify(array))
    fetchbookmarks()
}






function fetchbookmarks(params) {
    let array=JSON.parse(localStorage.getItem("array"))
    const loaded=array.map((content) => {
       return` <div class="output">
       <div>${content.name}</div><button class="visit"><a href="${content.url}" target="_blank">visit</a></button><button class="delete">delete</button>
   </div>`
    }).join("");
    output.innerHTML=loaded
    const deletewebsite=document.querySelector(".delete")
    deletewebsite.addEventListener("click",deletebutton)
}
//localStorage.clear()