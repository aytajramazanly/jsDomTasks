let boxs=Array.from(document.querySelectorAll(".box"))
let btns=document.querySelectorAll("button")


btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        let databgColor=btn.getAttribute("data-id");
        boxs.forEach((box)=>{
            box.style.backgroundColor="white"
         })
         document.getElementById(databgColor).style.backgroundColor=databgColor
    })
})



