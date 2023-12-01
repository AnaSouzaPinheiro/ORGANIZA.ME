let javaDiv = document.querySelector(".topJava");
let pythonDiv = document.querySelector(".topPython");
let RubyDiv = document.querySelector(".topRuby");
let CppDiv = document.querySelector(".topCpp");
let javaSDiv = document.querySelector(".topJavaScript");
let phpDiv = document.querySelector(".topPHP");

let setaImg = document.querySelector(".seta");
let setaImg1 = document.querySelector(".seta1");
let setaImg2 = document.querySelector(".seta2");
let setaImg3 = document.querySelector(".seta3");
let setaImg4 = document.querySelector(".seta4");
let setaImg5 = document.querySelector(".seta5");

function toggleJava() {
  javaDiv.style.display =
    javaDiv.style.display === "none" || javaDiv.style.display === ""
      ? "block"
      : "none";

  setaImg.classList.toggle("virada");
}

function togglePython() {
  pythonDiv.style.display =
    pythonDiv.style.display === "none" || pythonDiv.style.display === ""
      ? "block"
      : "none";

  setaImg1.classList.toggle("virada");
}

function toggleRuby() {
  RubyDiv.style.display =
    RubyDiv.style.display === "none" || RubyDiv.style.display === ""
      ? "block"
      : "none";

  setaImg2.classList.toggle("virada");
}

function toggleCpp() {
  CppDiv.style.display =
    CppDiv.style.display === "none" || CppDiv.style.display === ""
      ? "block"
      : "none";

  setaImg3.classList.toggle("virada");
}

function toggleJavaScript() {
  javaSDiv.style.display =
    javaSDiv.style.display === "none" || javaSDiv.style.display === ""
      ? "block"
      : "none";

  setaImg4.classList.toggle("virada");
}

function togglePHP() {
  phpDiv.style.display =
    phpDiv.style.display === "none" || phpDiv.style.display === ""
      ? "block"
      : "none";

  setaImg5.classList.toggle("virada");
}
