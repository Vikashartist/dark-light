    const clr = document.querySelector("body");
    const mainTxt = document.querySelector(".main");
    const dot2 = document.querySelector("#dot2");
    const dot = document.getElementById("dot");
    var a = 1;
    dot.addEventListener("click", function() {
      if (a == 1) {
        mainTxt.style.color = "white";
        clr.style.backgroundColor = "black";
        dot.style.backgroundColor = "black";
        dot.style.boxShadow = "#C8FFCA 0px 2px 12px -2px inset, #C8FFCA 0px 1px 7px -3px inset";
        dot2.style.backgroundColor = "#63E552";
        dot2.style.marginLeft = "60px";
        dot.style.transition = "all 0.7s";
        dot2.style.transition = "all 0.7s";
        a = 0;
      } else {
        mainTxt.style.color = "black";
        clr.style.backgroundColor = "white";
        dot.style.backgroundColor = "white";
        dot2.style.backgroundColor = "green";
        dot2.style.border = "1px solid white";
        dot2.style.marginLeft = "6px";
        dot.style.transition = "all 0.7s";
        dot2.style.transition = "all 0.7s";
        a = 1;
      }




    });
