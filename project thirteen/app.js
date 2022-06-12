const input=document.querySelector("input")
const box=document.querySelector(".box")


input.addEventListener("input",()=>{
    fetch("state-capitals.json")
    .then(response=>response.json())
    .then(data=>{
   const val= Object.values(data)
   const regex=new RegExp("^/w{5}$")
      val.forEach((value)=>{
         const propvalue=Object.values(value)
        if (propvalue.includes("Alabama")) {
           console.log(propvalue);
        } else {
           return""
        }
        
      })
      
       
       

        // console.log();
        // if (befilter.name) {
            
        // }
        // const statemap=states.map(state=>{
            
        //     return` <div class="boxes">
        //     <h2>${state[0]}</h2>
        //     <h2>Name:${stateinfo.name}</h2>
        //     <h3>Capital:${stateinfo.capital}</h3>
        //     <span><h4>Lat:${stateinfo.long}</h4>
        //     <h4>Lng:${stateinfo.lat}</h4></span>`
        // }).join("")

   
        //const statefiter=
           })
           
       })
    
