const images=document.querySelectorAll(".image")

console.log(images);
images.forEach(pics => {
    pics.addEventListener("click",e=>{
        let tap=e.currentTarget
        removepic()
        tap.classList.toggle("active")
    })
});
function removepic() {
    images.forEach(pics => {
        pics.classList.remove("active")
    });
}