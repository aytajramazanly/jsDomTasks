let btnOpen=document.querySelector(".open")
let btnClose=document.querySelector(".close")
btnOpen.addEventListener("click", ()=>{
    document.querySelector("#side-bar").style.transform="translateX(28%)"
})
btnClose.addEventListener("click",()=>{
    document.querySelector("#side-bar").style.transform="translateX(-100%)"
})

// let btnOpen=document.querySelector(".open")
// let btnClose=document.querySelector(".close")
// btnOpen.addEventListener("click", ()=>{
//     document.querySelector("#side-bar").style.width="30%"
// })
// btnClose.addEventListener("click",()=>{
//     document.querySelector("#side-bar").style.width="0"
// })