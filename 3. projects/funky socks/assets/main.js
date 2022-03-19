
let sock = document.querySelector(".sock");
let colors = [""assets/final_images/butterfly.png"", "#726756", "#703a56", "#953e00"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundImage = randColor;
}

sock.addEventListener("click", newColor);

let sockSpin = document.querySelector(".sock_animation")

function spin () {
  body.style.background = sockSpin
}

sock.addEventListener("click")