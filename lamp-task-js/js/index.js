let boxs=document.querySelectorAll(".box")
let btns=document.querySelectorAll("button")
let prebtn;
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let bgcolor = btn.getAttribute("data-id");
      if (prebtn) {
        prebtn.style.backgroundColor = "white";
      }
      let box = document.getElementById(bgcolor);
      prebtn = box;
      box.style.backgroundColor = bgcolor;
    });
  });



