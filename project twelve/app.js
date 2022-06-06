let fact=document.querySelector("#fact")
let facttext=document.querySelector("#facttext")
let input=document.querySelector("#numberinput")
let dateinput=document.querySelector("#dateinput")


input.addEventListener("input",getnofactajax)

function getnofactajax(params) {
   let number=input.value
  let xhr=new XMLHttpRequest()
  xhr.open("GET",`http://numberapi.com/${number}`)
  xhr.onload=()=>{
      if (xhr.status==200 && number!="") {
        fact.style.display="block"
        facttext.innerHTML=xhr.responseText
      }
     
  }
  xhr.send()
}
dateinput.addEventListener("input",getnofactajax)

// function getnofactajax(params) {
//    let day=input.value
//   let xhr=new XMLHttpRequest()
//   xhr.open("GET",`http://numberapi.com/#${day}/${month}/date`)
//   xhr.onload=()=>{
//       if (xhr.status==200 && number!="") {
//         fact.style.display="block"
//         facttext.innerHTML=xhr.responseText
//       }
     
//   }
//   http://numberapi.com/#6/5/date
//   xhr.send()
// }
