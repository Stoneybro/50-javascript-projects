const submit=document.querySelector(".submit>button")
const form=document.querySelector("form")
const sitename=document.getElementById("sitename").value
const url=document.getElementById("siteurl").value
const output=document.querySelector(".outputs")


form.addEventListener("submit",savebookmark)
function savebookmark(e) {
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
    } else{
        
    }

    const mapoutput=array.map(()=>{
        return` <div class="output">
        <div>${bookmarks.name}</div><button class="visit"><a href="${bookmarks.url}">visit</a></button><button class="delete">delete</button>
    </div>`
    })
    output.innerHTML+=mapoutput
}
