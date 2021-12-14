let btnOpen=document.querySelector(".open")
let btnClose=document.querySelector(".close")
btnOpen.addEventListener("click", (e)=>{
    document.querySelector("#side-bar").style.width="22%"
    e.target.style.display="none"
    
})
btnClose.addEventListener("click",()=>{
    document.querySelector("#side-bar").style.width="0"
    document.querySelector(".open").style.display="block"
})