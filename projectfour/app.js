const number=document.querySelector(".number")
const wrapper=document.querySelector(".wrapper")
let count=0
function load(params) {
    count++
    number.textContent=`${count}%`
    number.style.opacity=scale(count,0,100,1,0)
    wrapper.style.filter=`blur(${scale(count,0,100,1,0)}rem)`
    if (count>=100) {
        clearInterval(startloading)
    }
}
let startloading=setInterval(load,30)

load()
function scale(num,inmin,inmax,outmin,outmax) {
    return(num-inmin)*(outmax-outmin)/(inmax-inmin)+outmin;
}