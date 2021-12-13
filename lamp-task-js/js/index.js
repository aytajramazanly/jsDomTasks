let boxs=document.querySelectorAll(".box")
let btns=document.querySelectorAll("button")

btns.forEach((btn)=>{
btn.addEventListener("click", (e)=>{
    switch (e.target.innerText) {
        case "Yellow":
            boxs.forEach(item=>item.setAttribute("class", "box"))
            boxs[0].classList.toggle("yellow")
            break;
        case "Blue":
            boxs.forEach(item=>item.setAttribute("class", "box"))
            boxs[1].classList.toggle("blue")
        break;
        case "Red":
            boxs.forEach(item=>item.setAttribute("class", "box"))
            boxs[2].classList.toggle("red")
        break;
        case "Green":
            boxs.forEach(item=>item.setAttribute("class", "box"))
            boxs[3].classList.toggle("green")
        break;
        default:
            break;
    }
})
})



