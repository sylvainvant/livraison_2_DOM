'use strict';
  //let elem = document.getElementsByTagName('img')[0];
  //elem.classList.toggle("slide");
let slideShow = 1;
let themeLight = true;
display(slideShow);

function buttons(n) {
  display(slideShow += n);
}

function actifId(n) {
  display(slideShow = n);
}

function display(n) {

  let imgSlide = document.getElementsByClassName("slide");
  let id = document.getElementsByClassName("demo");
  /*console.log(n);*/
    (n > imgSlide.length) ? slideShow = 1 : null;
    n < 1 ? slideShow = imgSlide.length : null;
    /*console.log(slideShow.length);*/
    for (let i = 0; i < imgSlide.length; i++) {
      // To replace visible hidden
      imgSlide[i].style.opacity = "0";
      /*console.log(imgSlide[i]);*/
    }

    for (let i = 0; i < id.length; i++) {

      id[i].className = id[i].className.replace(" numbers", "");
    }
  //  To replace visible true
  imgSlide[slideShow-1].style.opacity = "1";

  id[slideShow-1].className += " numbers";
}


// add event click icon theme
theme.addEventListener("click",function() {
  themeLight = !themeLight;

    if(themeLight) {
      document.body.style.backgroundColor = "inherit";
      document.body.style.color = "#4d4d4d";
    } else{
      document.body.style.backgroundColor = "#4d4d4d";
      document.body.style.color = "white";
    }
})
