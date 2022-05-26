const box=document.querySelectorAll(".content")




window.addEventListener("scroll",fly)
fly()
function fly() {
    const high=window.innerHeight/5*3
    console.log(high);
    box.forEach((boxes)=>{
        const boxheight=boxes.getBoundingClientRect().top

        if (boxheight<high) {
            boxes.classList.add("show")
        }else{boxes.classList.remove("show")}
    })
}
