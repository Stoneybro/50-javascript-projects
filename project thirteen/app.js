const input=document.querySelector("input")
const box=document.querySelector(".box")


input.addEventListener("keyup",work)
    
function work(params) {
 
      fetch("state-capitals.json")
      .then(response=>response.json())
      .then(data=>{
     const val= Object.values(data)
     const regex=new RegExp(`^${input.value}`,`gi`)
        val.forEach((value)=>{
           const propvalue=Object.values(value)
          let propfilter=propvalue.filter(()=>{
             return propvalue[0].match(regex)||propvalue[1].match(regex)
          })
          if (propfilter[0]===undefined) {
             return
          }
     
          showhtml(propfilter)
         })
      })}

          function showhtml(propfilter) {
            const x=[""]
            let statemap=x.map(state=>{
                
             return` <div class="boxes">
             <h2>Name:${propfilter[0]}</h2>
             <h3>Capital:${propfilter[1]}</h3>
             <span><h4>Lat:${propfilter[2]}</h4>
             <h4>Lng:${propfilter[3]}</h4></span>`
         })
         box.innerHTML+=statemap
         console.log(box.innerHTML[0]);
      }
             
         
         
